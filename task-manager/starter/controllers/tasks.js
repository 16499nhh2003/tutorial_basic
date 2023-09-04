const getAllTask = (req, res) => {
    res.send("all items")
}

const createTask = (req, res) => {
    res.send("createTask")
}
const getTask = (req, res) => {
    res.send("getTask")
}
const updateTask = (req, res) => {
    res.send("updateTask")
}
const deleteTask = (req, res) => {
    res.send("deleteTask")
}

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask }
