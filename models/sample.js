const mongoose = require('mongoose');

const sampleSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports.SampleSchema = mongoose.model('Sample', sampleSchema);
    