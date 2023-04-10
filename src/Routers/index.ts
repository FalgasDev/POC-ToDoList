import { Router } from "express";
import toDoRoutes from "./toDoRoutes.js";

const routes = Router();

routes.use("/list", toDoRoutes)

export default routes;