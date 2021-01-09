// build your `Project` model here
const db = require('../data/db.config')

function find() {
	return db("projects")
}

function findById(id) {
	return db("projects")
		.where("id", id)
		.first()
}


function insertproject(projects) {
    return db('project')
      .insert(projects)
      .then(ids => ({ id: ids[0] }));
  }

module.exports = {
	find,
    findById,
    insertProject,
	
}