const { Router } = require("express");
const indexController = require("../controllers/indexController");
const protectController = require("../controllers/protectController");
const indexRouter = Router();

indexRouter.get("/", protectController.protect, indexController.renderIndex);

module.exports = indexRouter;