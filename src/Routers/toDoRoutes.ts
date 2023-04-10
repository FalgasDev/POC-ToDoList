import { Router } from "express";
import toDoControllers from "../Controllers/toDoControllers.js";

const toDoRoutes = Router()

toDoRoutes.post('/', toDoControllers.create)
toDoRoutes.get('/', toDoControllers.getAllTasks)

export default toDoRoutes