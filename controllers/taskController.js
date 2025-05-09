const Task = require('../models/Task')

async function addtask(req,res){
    
    const task = new Task({
        titulo: req.body.titulo
    })

    const a = await task.save()

    
    res.status(201).json(task)
}

module.exports = {addtask}