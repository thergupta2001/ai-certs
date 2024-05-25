const getTaskByIdController = async (req, res) => {
  try {
    res.status(200).json({
        message: "Task retrieved!"
    });
  } catch (error) {
    // Handle errors
    console.error('Error fetching task by ID:', error);
    res.status(500).json({ message: 'Failed to fetch task' });
  }
};

module.exports = { getTaskByIdController };
