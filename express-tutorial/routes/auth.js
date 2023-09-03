const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name } = req.body;
    if (name) {
        res.status(200).send(`welcome ${name}`)
        return
    }
    res.status(400).send('Authentttication')
})

module.exports = router