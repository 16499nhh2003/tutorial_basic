const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDb = require('./db/connect')

// app.use(express.json())
// app.use((express.urlencoded({ extended: false })))

app.use('/api/v1/tasks', tasks)

const port = 3000
const start = async () => {
    try {
        await connectDb()
    } catch (err) {
        console.log(err)
    }
}
start()
app.listen(port, console.log(`Server is listening on port ${port}`))