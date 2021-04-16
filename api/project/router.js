// build your `/api/projects` router here
const router = require("express").Router()

router.use("/", (req, res) => {
    res.json("working")
})

module.exports = router