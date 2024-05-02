import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const renderLogin = (req, res) => {
    res.render("login", { title: "Login" });
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const id = user._id;
    const expiryTime = Math.floor(Date.now() / 1000 + (60 * 60 * 24));
    if (await user.correctPassword(password, user.password)) {
        const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: expiryTime });
        res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 });
        res.cookie("user", id, { httpOnly: true });
        res.json({ user: id });
    }
};
