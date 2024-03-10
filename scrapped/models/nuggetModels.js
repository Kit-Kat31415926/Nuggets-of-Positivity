const mongoose = require('mongoose');

// Call constructor function
const Schema = mongoose.Schema;

const nuggetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nugget: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Nugget = mongoose.model('Nugget', nuggetSchema);

module.exports = Nugget;
