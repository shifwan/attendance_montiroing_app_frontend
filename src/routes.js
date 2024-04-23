import Router from "express";
import cookieController from "./resources/cookie/controller.js";
import infoController from "./resources/info/controller.js";
import attendanceController from "./resources/attendance/controller.js";
import { validateResource } from "./common/middlewares.js";

import cookieSchema from "./resources/cookie/requestSchema.js";
import infoSchema from "./resources/info/requestSchema.js";
import attendanceSchema from "./resources/attendance/requestSchema.js";

const v1Router = new Router();

v1Router.get("/cookie", validateResource(cookieSchema), cookieController);
v1Router.get("/info", validateResource(infoSchema), infoController);
v1Router.get(
  "/attendance",
  validateResource(attendanceSchema),
  attendanceController
);

export default v1Router;
