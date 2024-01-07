const mongoose = require('mongoose')
const animeWordSchema = new mongoose.Schema({
    animeWord: {
        type: String,
        required: true
    },
    meaning: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('AnimeWord', animeWordSchema, 'animewords')