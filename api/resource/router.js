// build your `/api/resources` router here
const router = require("express").Router()
const Resource = require("./model")

router.use("/", (req, res) => {
    Resource.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            res.status(500).json({ err: err.message })
        })
})

module.exports = router