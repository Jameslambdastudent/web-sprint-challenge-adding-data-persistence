// build your `/api/projects` router here
const express = require("express")
const project = require("./model/projects")

const router = express.Router()

router.get("/projects", async (req, res, next) => {
	try {
		const projects = await project.find()
		res.json(projects)
	} catch(err) {
		next(err)
	}
})

router.get("/projects/:id", async (req, res, next) => {
	try {
		const project = await project.findById(req.params.id)
		if (!zoo) {
			return res.status(404).json({
				message: "Zoo not found",
			})
		}

		res.json(project)
	} catch(err) {
		next(err)
    }
    
    router.post('/projects', (req, res) => {
        if (!req.body.name || !req.body.description || !req.bosy.completed) {
            return res.status(400).json({message: "Missing  Content"})
        }
        projects.insert(req.body)
        .then((project) => {
            res.status(201).json(project)
        })
        .catch((err) => {
            res.status(500).json({message: "Err Adding Post"})
        })
    })
    
})
