import { Router } from "express";
import { renderAdmin } from "../controllers/adminController.js";
import { restrictTo } from "../controllers/rolesController.js";
const adminRouter = Router();

adminRouter.get("/", (req, res, next) => restrictTo(req, res, next, "admin"), renderAdmin);

export default adminRouter;