const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    tasks: {
        type: String,
        required: true
    },

    categories:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required:false
    }],

    status: {
        type: String,
        required: true,
        enum: ['todo', 'in progress', 'done']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Task', TaskSchema);
