import { Router } from "express";
import { renderAdmin, delUser, updateRole } from "../controllers/adminController.js";
import { restrictTo } from "../controllers/rolesController.js";
const adminRouter = Router();

adminRouter.get("/", (req, res, next) => restrictTo(req, res, next, "admin"), renderAdmin);
adminRouter.post("/delete/:id", delUser);
adminRouter.post("/change-role/:id", updateRole);

export default adminRouter;