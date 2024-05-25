
const updateTaskController = async (req, res) => {
  try {
    return res.status(200).json({
        message: "Task updated successfully"
    });
  } catch (error) {
    console.error('Error updating task by ID:', error);
    res.status(500).json({ message: 'Failed to update task' });
  }
};

module.exports = { updateTaskController };
