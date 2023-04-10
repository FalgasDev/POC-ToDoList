import { Router } from "express";
import toDoControllers from "../Controllers/toDoControllers.js";

const toDoRoutes = Router()

toDoRoutes.post('/', toDoControllers.create)
toDoRoutes.get('/', toDoControllers.getAllTasks)
toDoRoutes.put('/:id', toDoControllers.updateTask)
toDoRoutes.delete('/:id', toDoControllers.deleteTask)

export default toDoRoutes