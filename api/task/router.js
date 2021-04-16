// build your `/api/tasks` router here
const router = require("express").Router()
const Tasks = require("./model");

router.get("/", (req, res) => {
    Tasks.getTasks()
        .then((tasks) => {
            res.status(200).json(tasks)
        })
        .catch((err) => {
            res.status(500).json({ err: err.message })
        })
})

router.post("/", (req, res) => {
    const dataInput = req.body
    Tasks.addTask(dataInput)
    .then(task => {
        res.status(201).json(task)
    })
    .catch((err) => {
        res.status(500).json({ err: err.message })
    })
})

module.exports = router 