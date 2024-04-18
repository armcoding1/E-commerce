const express = require("express");
const indexRouter = require("./routes/indexRouter");
const morgan = require("morgan");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(morgan("dev"));
app.use("/", indexRouter);

module.exports = app;