const express = require("express")
const server = express()

const PORT = process.env.PORT || 6000
server.use(express.json())


const projectRouter = require("./api/project/router")
const resouceRouter = require("./api/resource/router")
const taskRouter = require("./api/task/router")

server.use(projectRouter)
server.use(resouceRouter)
server.use(taskRouter)


server.get('/', (req, res) => {
    res.status(200).json({message: "Server Running On Ghost Mode"})
})


server.listen(PORT, () => {
	console.log(`Running at on ${PORT}`)
})