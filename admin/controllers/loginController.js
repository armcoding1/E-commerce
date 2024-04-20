const User = require("../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
};

exports.renderLogin = (req, res, next) => {
    res.render("login", { title: "Login" });
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next("Please provide email and password", 400)
    }

    const user = await User.findOne({ email });

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next("Incorrect email or password", 401)
    }

    const token = signToken(user._id);
    console.log(token);
    res.redirect("/");
};