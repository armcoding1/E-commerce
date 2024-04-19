const { Router } = require("express");
const campController = require("../controllers/campController");
const campRouter = Router();

campRouter.get("/", campController.renderCamp);

module.exports = campRouter;