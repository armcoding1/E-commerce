import User from "../models/userModel.js";

export const renderProfile = async (req, res) => {
    const userId = req.cookies.user;
    const user = await User.findById(userId);
    const formattedTime = user.createdAt.toDateString();
    const updatedTime = user.updatedAt.toDateString();
    res.render("profile", { title: "Profile", user, formattedTime, updatedTime });
};