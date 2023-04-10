import { Request, Response } from "express";
import toDoServices from "../Services/toDoServices.js";

async function create(req: Request, res: Response) {
  const task = req.body.task as string

  try {
    await toDoServices.create(task)

    return res.sendStatus(201)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function getAllTasks(req: Request, res: Response) {
  try {
    const tasks = await toDoServices.allTasks()

    res.send(tasks)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function updateTask(req: Request, res: Response) {
  const id = req.params.id as string
  const task = req.body.task as string

  try {
    await toDoServices.updateTask(task, id)

    res.sendStatus(200)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

async function deleteTask(req: Request, res: Response) {
  const id = req.params.id as string

  try {
    await toDoServices.deleteTask(id)

    res.sendStatus(200)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export default {
  create,
  getAllTasks,
  updateTask,
  deleteTask
}