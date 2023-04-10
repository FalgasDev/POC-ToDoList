import toDoRepositories from "../Repositories/toDoRepositories.js"
import errors from "../errors/index.js"

async function create(task: string) {
  const alreadyCreated = await toDoRepositories.findByText(task)

  if (alreadyCreated.rowCount !== 0) throw errors.conflictError('Essa tarefa já existe')

  await toDoRepositories.create(task)
}

async function allTasks() {
  const tasks = await toDoRepositories.allTasks()

  return tasks.rows
}

async function updateTask(task: string, id: string) {
  const hasTask = await toDoRepositories.findById(id)

  if (hasTask.rowCount === 0) throw errors.notFoundError()

  await toDoRepositories.updateTask(task, id)
}

async function deleteTask(id: string) {
  const hasTask = await toDoRepositories.findById(id)

  if (hasTask.rowCount === 0) throw errors.notFoundError()

  await toDoRepositories.deleteTask(id)
}

export default {
  create,
  allTasks,
  updateTask,
  deleteTask
}