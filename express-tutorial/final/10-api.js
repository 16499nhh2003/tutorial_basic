const express = require('express')
const app = express()
let { people } = require('./data')  

app.use(express.static('./method-public'))
app.use((express.urlencoded({ extended: false })))
app.use(express.json())

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        res.status(200).send(`welcome ${name}`)
        return
    }
    res.status(400).send('Authentttication')
})

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(404).json({ success: false, message: "please provide name value" })
    }
    res.status(201).json({ success: true, data: name })
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(404).json({ success: false, message: "please provide name value" })
    }
    res.status(201).json({ success: true, data: [...people, name] })
})

app.put('/api/postman/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    var person = people.find(p => p.id === Number(id))
    if (!person) {
        res.json({ success: false, message: "not found user" })
        return
    }
    let newPerson = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    // let newListPeople =
    //     people.find(p => {
    //         if (p.id === Number(id)) {
    //             p.name = name
    //         }
    //         return p
    //     })
    // console.log(newListPeople);
    return res.status(200).json({ success: true, message: "successfull", data: newPerson })
})
app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})      
