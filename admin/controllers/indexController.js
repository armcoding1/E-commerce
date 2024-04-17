exports.renderIndex = (req, res, next) => {
    res.render("index");
    next("Index is rendered")
}