// build your `Resource` model here
const db = require("../../data/dbConfig")

function getResources() {
    return db("resources")
}

const getById = (resource_id) => {
    return  db("resources")
        .where("resource_id", resource_id)
        .first()    
}

async function addResource(resource) {
    const newResource = await db("resources").insert(resource) //returns id of created object
    return getById(newResource)
}

module.exports = {
    getResources,
    addResource
}