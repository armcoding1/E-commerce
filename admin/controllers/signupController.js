const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

exports.renderSignup = (req, res, next) => {
    res.render("signup", { title: "Sign up" });
    next("Signup page is rendered");
};

exports.signup = async (req, res, next) => {
    const user = await User.create({
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    });
    const token = signToken(user._id);
    res.redirect("/login");
    next(); 
};