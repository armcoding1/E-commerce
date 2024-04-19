const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = Schema({
    email: {
        type: String,
        required: [true, "Please provide your email"],
        validate: [validator.isEmail, "Please enter valid email"],
        unique: true
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
            validator: function (el) {
                return el === this.password
            },
            message: "Passwords are not the same"
        }
    }
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 12),

        this.passwordConfirm = undefined;
    next();
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)
};

module.exports = model("User", userSchema);