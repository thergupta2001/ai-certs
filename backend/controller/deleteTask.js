const deleteTaskByIdController = async (req, res) => {
  try {
    const taskId = req.params.id;

    return res.json({
        message: "Task deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to delete task' });
  }
};

module.exports = { deleteTaskByIdController };
