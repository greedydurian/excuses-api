const mongoose = require("mongoose")

const excuseschema = new mongoose.Schema({
    content: String,
    type: String
})

module.exports = mongoose.model('Excuse', excuseschema) //first part 'Excuse' is the name, and 'excuseschema' is to get our mongoose schema