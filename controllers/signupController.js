import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const renderSignup = (req, res) => {
    res.render("signup", { title: "Sign up" });
};

export const signup = async (req, res) => {
    const { name, email, password, passwordConfirm } = req.body;
    const user = await User.create({ name, email, password, passwordConfirm });
    const id = user._id;
    const expiryTime = Math.floor(Date.now() / 1000 + (60 * 60 * 24));
    const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: expiryTime });
    res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 });
    res.cookie("user", id, { httpOnly: true });
    res.json({ user: id });
};