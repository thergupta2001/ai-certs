const TodoModel = require('../models/todoModel.js');

const addTaskController = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;

    // Create a new task
    const newTask = new TodoModel({
      title,
      description,
      status: status || 'pending', // Default status to 'pending' if not provided
      dueDate
    });

    await newTask.save();

    res.status(201).json({
        message: "Task created successfully",
        success: true,
        path: null
    });
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({
        message: "Failed to add task",
        success: false,
        path: null
    });
  }
};

module.exports = { addTaskController };
