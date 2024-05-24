const TodoModel = require('../models/todoModel.js');

const deleteTaskByIdController = async (req, res) => {
  try {
    const taskId = req.params.id;

    const deletedTask = await TodoModel.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({
        message: "Task deleted successfully",
        success: true,
        path: null
    });
  } catch (error) {
    console.error('Error deleting task by ID:', error);
    res.status(500).json({ message: 'Failed to delete task' });
  }
};

module.exports = { deleteTaskByIdController };
