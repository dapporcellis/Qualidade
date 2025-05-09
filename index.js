const express =require('express');
const mongoose = require('mongoose');
const app = express();
const taskRoute = require('./routes/taskRoute.js');

app.use(express.json());


app.use(taskRoute);



module.exports = app;