const mongoose = require('mongoose');

const ATLSchema = mongoose.Schema({
    AreaTypeCode: {
        type: String,
        required: true
    },
    MapCode: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('atl', ATLSchema, 'atl');