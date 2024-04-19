const { Router } = require("express");
const signupController = require("../controllers/signupController");
const signupRouter = Router();

signupRouter.get("/", signupController.renderSignup);
signupRouter.post("/", signupController.signup);

module.exports = signupRouter;