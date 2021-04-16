// build your `/api/resources` router here
const router = require("express").Router()

router.use("/", (req, res) => {
    res.json("working")
})

module.exports = router