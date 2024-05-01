export const renderIndex = (req, res) => {
    res.render("index", { title: "Home", user: req.cookies.jwt });
}