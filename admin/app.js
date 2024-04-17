const express = require("express");
const indexRouter = require("./routes/indexRouter");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.use("/", indexRouter);

module.exports = app;