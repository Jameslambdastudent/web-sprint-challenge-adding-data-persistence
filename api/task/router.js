// build your `/api/tasks` router here
const express = require("express")
const task = require("./models/taks")

const router = express.Router()

router.get("/tasks", async (req, res, next) => {
	try {
		const tasks = await Task.find()
		res.json(tasks)
	} catch(err) {
		next(err)
	}
})

router.get("/animals/:id", async (req, res, next) => {
	try {
		const task = await Tasks.findById(req.params.id)
		if (!task) {
			return res.status(404).json({
				message: "Animal not found",
			})
		}

		res.json(task)
	} catch(err) {
		next(err)
	}
})



module.exports = router