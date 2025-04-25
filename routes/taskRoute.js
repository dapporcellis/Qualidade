const express = require("express");
const router = express.Router();

const controller =require("../controllers/taskController.js");

router.post("/tasks", controller.addtask);

module.exports = router;