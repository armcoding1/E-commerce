import { Router } from "express";
import { renderLogin, login } from "../controllers/loginController.js";
const loginRouter = Router();

loginRouter
    .route("/")
    .get(renderLogin)
    .post(login)

export default loginRouter;