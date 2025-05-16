const Task = require('../models/Task')

async function addtask(req,res){
    
    const task = new Task({
        titulo: req.body.titulo
    })

    const a = await task.save()
    console.log(a)
    
    res.status(201).json(task)
}

async function getTasks(req,res){
    const tasks = await Task.find()
    res.status(200).json(tasks)
}

async function getTaskById(req,res){

}

module.exports = {addtask, getTasks, getTaskById}