// build your `/api/resources` router here
const resource = require("./model/resources")

const router = express.Router()

router.get("/resources", async (req, res, next) => {
	try {
		const resources = await project.find()
		res.json(resources)
	} catch(err) {
		next(err)
	}
})

router.get("/resources/:id", async (req, res, next) => {
	try {
		const resource = await resource.findById(req.params.id)
		if (!resource) {
			return res.status(404).json({
				message: "Zoo not found",
			})
		}

		res.json(resource)
	} catch(err) {
		next(err)
    }
    
    router.post('/resources', (req, res) => {
        if (!req.body.name || !req.body.description ) {
            return res.status(400).json({message: "Missing  Content"})
        }
        resources.insert(req.body)
        .then((resource) => {
            res.status(201).json(resource)
        })
        .catch((err) => {
            res.status(500).json({message: "Err"})
        })
    })
    
})
