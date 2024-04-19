const express = require("express");
const indexRouter = require("./routes/indexRouter");
const signupRouter = require("./routes/signupRouter");
const loginRouter = require("./routes/loginRouter");
const morgan = require("morgan");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(morgan("dev"));
app.use("/", indexRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter)

module.exports = app;