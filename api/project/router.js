// build your `/api/projects` router here
const router = require("express").Router()
const Projects = require("./model");

router.get("/", (req, res) => {
    Projects.getProjects()
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch((err) => {
            res.status(500).json({ err: err.message })
        })
})

router.post("/", (req, res) => {
    const dataInput = req.body
    Projects.addProject(dataInput)
    .then(project => {
        res.status(201).json(project)
    })
    .catch((err) => {
        res.status(500).json({ err: err.message })
    })
})

module.exports = router 