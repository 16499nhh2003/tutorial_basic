const mongoose = require('mongoose')

const connectedString = "mongodb+srv://root:12345@sandbox.fmop9nj.mongodb.net/?retryWrites=true&w=majority"

const connectDb = (url) => {
    return mongoose
        .connect(connectedString,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: true
            })
}

module.exports = connectDb