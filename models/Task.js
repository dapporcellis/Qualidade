const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/tarefas');
//mongoose.connect('mongodb://aluno:aluno@ac-pcra3vd-shard-00-00.ajiapmy.mongodb.net:27017,ac-pcra3vd-shard-00-01.ajiapmy.mongodb.net:27017,ac-pcra3vd-shard-00-02.ajiapmy.mongodb.net:27017/?ssl=true&replicaSet=atlas-14e4b2-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')

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

module.exports = Task;