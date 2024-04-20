const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

exports.protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    }

    if (!token) {
        return next("You are not logged in! Please log in to get access.", 401)
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET)

    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
        return next("The token belonging to this token does no longer exist.", 401)
    }

    if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next("User recently changed password! Please log in again", 401)
    }
    req.user = currentUser;
    next();
}