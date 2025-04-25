const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },    
    status: {
        type: Boolean,
        default: true
    },
    dataCriacao: {
        type: Date,
        default: Date.now
    }
});

const Task = mongoose.model('Task', taskSchema);