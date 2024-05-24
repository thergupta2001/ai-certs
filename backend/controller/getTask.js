const TodoModel = require('../models/todoModel.js');

const getTaskController = async (req, res) => {
  try {
    const tasks = await TodoModel.find();

    res.status(200).json({
        message: "Tasks fetched successfully",
        success: true,
        data: tasks
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
};

module.exports = { getTaskController };
