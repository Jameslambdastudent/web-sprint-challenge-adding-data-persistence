
exports.seed = async function(knex) {
	await knex("projects").insert([   
		{ name: "React Movie", description: "Make A Movie App With React", completed: "false" },
    { name: "CSS Color", description: "Use CSS To Make A Rainbow", completed: "true" },
    { name: "Github", description: "Make A Github Clone", completed: "false" },
    { name: "Weather App", description: "Build A Weather App", completed: "true" },
	])
}
