const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");

module.exports = app;