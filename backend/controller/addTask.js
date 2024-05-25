const addTaskController = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;

    if (!title || !description || !status || !dueDate) {
      return res.json({ message: "All the fields are required!" })
    }

    return res.json({ message: "Task created successfully!" })
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({
      message: "Failed to add task"
    });
  }
};

module.exports = { addTaskController };
