import User from "../models/userModel.js";

export const renderAdmin = async (req, res) => {
    const users = await User.find({});
    res.render("admin", { title: "Admin panel", users });
};

export const delUser = async (req, res) => {
    const { del_id } = req.body;
    await User.findByIdAndDelete(del_id);
    res.redirect("/admin")
};

export const updateRole = async (req, res) => {
    const { role } = req.body;
    console.log(role);
    const user = await User.findByIdAndUpdate(req.params.id, { role: role });
    res.redirect("/admin")
    console.log(user);
};