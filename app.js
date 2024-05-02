// import modules
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// import routes & middlewares
import indexRouter from "./routes/indexRouter.js";
import signupRouter from "./routes/signupRouter.js";
import loginRouter from "./routes/loginRouter.js";
import { checkUser } from "./middleware/verify.js";
import logoutRouter from "./routes/logoutRouter.js";
import profileRouter from "./routes/profileRouter.js";
import adminRouter from "./routes/adminRouter.js";

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(morgan("dev"));

// view engine
app.set("view engine", "pug");

// routes
app.use("*", checkUser);
app.use("/", indexRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/profile", profileRouter);
app.use("/admin", adminRouter);

export default app;