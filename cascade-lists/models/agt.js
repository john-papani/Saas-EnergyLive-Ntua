const mongoose = require('mongoose');

const AGTSchema = mongoose.Schema({
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
    }
});

module.exports = mongoose.model('agt', AGTSchema, 'agt');