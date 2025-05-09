const express =require('express');
const app = express();

const taskRoute = require('./routes/taskRoute.js');

app.use(express.json());

app.use(taskRoute);

module.exports = app;