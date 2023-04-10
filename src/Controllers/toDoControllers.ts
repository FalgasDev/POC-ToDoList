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

export default {
  create
}