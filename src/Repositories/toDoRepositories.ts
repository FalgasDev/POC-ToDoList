import connectionDb from "../config/database.js"

async function create(task: string) {
  await connectionDb.query(`
    INSERT INTO tasks (task)
    VALUES ($1)
  `, [task])
}

async function findByText(task: string) {
  return await connectionDb.query(`
    SELECT * FROM tasks WHERE task = $1
  `, [task])
}

async function allTasks() {
  return await connectionDb.query(`
    SELECT * FROM tasks
  `)
}

async function findById(id: string) {
  return await connectionDb.query(`
    SELECT * FROM tasks WHERE id = $1
  `, [id])
}

async function updateTask(task: string, id: string) {
  await connectionDb.query(`
    UPDATE tasks 
    SET task = $1 
    WHERE id = $2
  `, [task ,id])
}

async function deleteTask(id: string) {
  await connectionDb.query(`
    DELETE FROM tasks WHERE id = $1
  `, [id])
}

export default {
  create,
  findByText,
  allTasks,
  findById,
  updateTask,
  deleteTask
}