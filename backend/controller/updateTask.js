const TodoModel = require('../models/todoModel.js');

const updateTaskController = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, status, dueDate } = req.body;

    let task = await TodoModel.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (title) task.title = title;
    if (description) task.description = description;
    if (status) task.status = status;
    if (dueDate) task.dueDate = dueDate;

    await task.save();

    res.status(200).json({
        message: "Task updated successfully",
        success: true,
        path: null
    });
  } catch (error) {
    console.error('Error updating task by ID:', error);
    res.status(500).json({ message: 'Failed to update task' });
  }
};

module.exports = { updateTaskController };
