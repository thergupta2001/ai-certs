const express = require("express");
const { addTaskController } = require("../controller/addTask");
const { getTaskController } = require("../controller/getTask");
const { updateTaskController } = require("../controller/updateTask");
const { getTaskByIdController } = require("../controller/getById");
const { deleteTaskByIdController } = require("../controller/deleteTask");
const router = express.Router();

router.post("/tasks", addTaskController);
router.get("/tasks", getTaskController);
router.get("/tasks/:id", getTaskByIdController);
router.put("/tasks/:id", updateTaskController);
router.delete("/tasks/:id", deleteTaskByIdController);

module.exports = router;