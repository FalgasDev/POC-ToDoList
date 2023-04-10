import toDoRepositories from "../Repositories/toDoRepositories.js"
import errors from "../errors/index.js"

async function create(task: string) {
  const alreadyCreated = await toDoRepositories.findByText(task)

  if (alreadyCreated.rowCount !== 0) throw errors.conflictError('Essa tarefa já existe')

  await toDoRepositories.create(task)
}

export default {
  create
}