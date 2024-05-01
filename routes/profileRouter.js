import { Router } from "express";
import { renderProfile } from "../controllers/profileController.js";
import { verifyToken } from "../middleware/verify.js";
const profileRouter = Router();

profileRouter.get("/", verifyToken, renderProfile);

export default profileRouter;