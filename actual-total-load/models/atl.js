const mongoose = require('mongoose');

const ATLSchema = mongoose.Schema({
    DateTime: {
        type: Date,
        required: true
    },
    AreaTypeCode: {
        type: String,
        required: true
    },
    MapCode: {
        type: String,
        required: true
    },
    TotalLoadValue: {
        type: Number,
        required: true
    },
    UpdateTime: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('atl', ATLSchema, 'atl');