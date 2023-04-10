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

export default {
  create,
  findByText,
  allTasks
}