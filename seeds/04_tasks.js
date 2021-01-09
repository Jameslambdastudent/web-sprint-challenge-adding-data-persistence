exports.seed = async function(knex) {
	await knex("tasks").insert([   
		{  description: "Make Mobile App", notes: "???", completed: "false", project_id: 1  },
    { description: "Add New Colors", notes: "??", completed: "true", project_id: 2  },
    { description: "Add Nightmode",  notes: "???", completed: "false", project_id: 3  },
    { description: "Add Another Country",  notes: "???", completed: "true", project_id: 4  },
	])
}