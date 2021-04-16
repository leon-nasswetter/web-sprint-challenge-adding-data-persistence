// build your `Project` model here
const db = require("../../data/dbConfig");

function getProjects() {

    return db("projects").then((projects) => {
        return projects.map((project) => {
          return {
            ...project,
            project_completed: project.project_completed === 0 ? false : true,
          };
        });
      });
}

const getById = (project_id) => {
    return db("projects").where({project_id}).first();
  };

async function addProject(project) {
    const resourceId = await db("projects").insert(project)
    const resProject = await getById(resourceId)
    return{
        ...resProject,
        project_completed: project.project_completed ? true : false,
    }
}

module.exports = {
    getProjects,
    addProject
} 