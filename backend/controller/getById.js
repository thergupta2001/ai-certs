const TodoModel = require('../models/todoModel.js');

const getTaskByIdController = async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await TodoModel.findById(taskId);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
        success: false,
        path: null
      });
    }

    res.status(200).json({
        message: "Task retrieved!",
        success: true,
        path: "/task",
        data: task
    });
  } catch (error) {
    // Handle errors
    console.error('Error fetching task by ID:', error);
    res.status(500).json({ message: 'Failed to fetch task' });
  }
};

module.exports = { getTaskByIdController };
