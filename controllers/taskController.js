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
    console.log(req.params)
    const task = await Task.findById(req.params.id)
    task.titulo = req.body.titulo;
    await task.save()
    res.status(200).json(task)
}

async function deleteTask(req,res){
    const task = await Task.findByIdAndDelete(req.params.id)
    res.status(200).json(task)
}

module.exports = {addtask, getTasks, getTaskById, deleteTask}