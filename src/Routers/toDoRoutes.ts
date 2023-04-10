import { Router } from "express";
import toDoControllers from "../Controllers/toDoControllers.js";

const toDoRoutes = Router()

toDoRoutes.post('/', toDoControllers.create)

export default toDoRoutes