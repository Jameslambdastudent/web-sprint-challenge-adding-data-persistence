// build your `Task` model here
const db = require("../data/config")

function find() {
	return db("tasks as t")
		.leftJoin("projects as p", "p.id", "t.projects_id")
		.select("t.id", "t.name", "p.name as projects_name")
}

function findById(id) {
	return db("tasks as t")
		.where("a.id", id)
		.leftJoin("projects  as p", "p.id", "t.projects_id")
		.first("t.id", "t.name", "p.name as projects_name")
}

module.exports = {
	find,
	findById,
}