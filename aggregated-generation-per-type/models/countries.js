const mongoose = require('mongoose');

const CountriesSchema = mongoose.Schema({
    Country: {
        type: String,
        required: true
    },
    MapCode: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('countries', CountriesSchema, 'countries');