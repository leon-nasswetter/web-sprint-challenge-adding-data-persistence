// build your `Task` model here
const db = require("../../data/dbConfig");

function getTasks() {
  return db("tasks as t")
    .join("projects", "t.project_id", "projects.project_id")
    .select(
      "project_description",
      "project_name",
      "task_completed",
      "task_notes",
      "task_description"
    )
    .then((tasks) => {
      return tasks.map((task) => {
        return {
          ...task,
          task_completed: task.task_completed === 0 ? false : true,
        };
      });
    });
}

const getById = (task_id) => {
    return db("tasks").where({task_id}).first();
  };

async function addTask(task) {
    const resId = await db("tasks").insert(task)
    const resTask = await getById(resId)
    return{
        ...resTask,
        task_completed: task.task_completed ? true : false,
    }
}

module.exports = {
  getTasks,
  addTask
};

