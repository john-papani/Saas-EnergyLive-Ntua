const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    valid_until: {
        type: Date,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('users', userSchema, 'users');