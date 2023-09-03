let {people} = require('../data')
const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

const addPeople = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(404).json({ success: false, message: "please provide name value" })
    }
    res.status(201).json({ success: true, data: name })
}

const addPostMan = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(404).json({ success: false, message: "please provide name value" })
    }
    res.status(201).json({ success: true, data: [...people, name] })
}

module.exports = { getPeople, addPeople ,addPostMan}