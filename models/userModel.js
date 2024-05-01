import { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = Schema({
    email: {
        type: String,
        required: [true, "Please provide your email"],
        validate: [validator.isEmail, "Please enter valid email"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Please provide your password"],
        minlength: 8,
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm the password"],
        validate: {
            validator: function (pass) {
                return pass === this.password
            },
            message: "Passwords are not the same"
        }
    },
    role: {
        type: String,
        enum: ["user", "guide", "admin"],
        default: "user"
    }
}, { timestamps: true });

userSchema.pre("save", async function (next) {
    const existingUser = await this.constructor.findOne({ email: this.email });
    if (existingUser) {
        const err = new Error("Email already exists");
        return next(err);
    }

    if (!this.isModified("password")) return next();

    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    this.passwordConfirm = undefined;
});

userSchema.methods.correctPassword = async (candidatePassword, password) => {
    return await bcrypt.compare(candidatePassword, password);
};

const User = model("User", userSchema);

export default User;