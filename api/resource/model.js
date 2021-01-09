const db = require('../data/db.config')

function find() {
	return db("resouces")
}

function findById(id) {
	return db("resources")
		.where("id", id)
		.first()
}


function insertproject(resources) {
    return db('resource')
      .insert(resources)
      .then(ids => ({ id: ids[0] }));
  }

module.exports = {
	find,
    findById,
    insertResources,
	
}