exports.seed = async function(knex) {
	await knex("resources").insert([   
		{ name: "Youtube", description: "Watch This Video" },
    { name: "Google", description: "Bookmark This Site" },
    { name: "StakeoverFlow", description: "Read This Thread" },
    { name: "Lambda School", description: "webpt20" },
	])
}