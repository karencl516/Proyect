const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
        },
    Message: {
        type: String,
        require: true
        },
}
)

module.exports = mongoose.model('Todo', todoSchema)