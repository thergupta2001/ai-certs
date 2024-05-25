const getTaskController = async (req, res) => {
  try {
    return res.status(200).json({
        message: "Tasks fetched successfully"
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
};

module.exports = { getTaskController };
