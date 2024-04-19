const express = require("express");
const morgan = require("morgan");
const indexRouter = require("./routes/indexRouter");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(morgan("dev"));
app.use("/", indexRouter);

module.exports = app;