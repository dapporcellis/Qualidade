const express = require("express");
const router = express.Router();

const controller =require("../controllers/taskController.js");

router.post("/tasks", controller.addtask);
router.get("/tasks", controller.getTasks);
router.put("/tasks/:id", controller.getTaskById);
router.delete("/tasks/:id", controller.deleteTask);

module.exports = router;