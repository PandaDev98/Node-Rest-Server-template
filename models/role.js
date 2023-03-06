const { Schema, model } = require('mongoose');

const userSchema = Schema({
    role: {
        type: String,
        required: [true, 'Role is required']
    }
});

module.exports = model('Role', userSchema);