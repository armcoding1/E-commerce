export const logout = (req, res) => {
    res.clearCookie("jwt");
    res.clearCookie("user");
    res.redirect("/");
};