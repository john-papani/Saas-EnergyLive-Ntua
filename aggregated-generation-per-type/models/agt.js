const mongoose = require('mongoose');

const AGTSchema = mongoose.Schema({
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
    ProductionType: {
        type: String,
        required: true
    },
    ActualGenerationOutput: {
        type: Number,
        required: true
    },
    UpdateTime: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('agt', AGTSchema, 'agt');