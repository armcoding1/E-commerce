import { Router } from "express";
import { renderSignup, signup } from "../controllers/signupController.js";
const signupRouter = Router();

signupRouter
    .route("/")
    .get(renderSignup)
    .post(signup)

export default signupRouter;