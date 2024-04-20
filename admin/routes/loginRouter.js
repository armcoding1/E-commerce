const { Router } = require("express");
const loginController = require("../controllers/loginController");
const forgotController = require("../controllers/forgotController");
const loginRouter = Router();

loginRouter.get("/", loginController.renderLogin);
loginRouter.post("/", loginController.login);
loginRouter.post("/forgotPassword", forgotController.forgotPassword);
loginRouter.patch("/resetPassword/:token", forgotController.resetPassword);

module.exports = loginRouter;