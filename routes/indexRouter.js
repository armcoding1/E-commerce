import { Router } from "express";
import { renderIndex } from "../controllers/indexController.js";
const indexRouter = Router();

indexRouter.get("/", renderIndex);

export default indexRouter;