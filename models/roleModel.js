const mongoose = require('mongoose');


const roleSchema = new mongoose.Schema({

    role_name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true,
        enum: ['admin', 'manager', 'user']
    }

});



module.exports = mongoose.model('Role', roleSchema);
