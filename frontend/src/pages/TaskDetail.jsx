import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const TaskDetail = () => {
  const taskId = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState(null);
  const [editedTask, setEditedTask] = useState(null);

  useEffect(() => {
    async function fetchTask() {
      try {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const taskWithId = storedTasks.find(task => task._id === taskId.id);
        if (taskWithId) {
          setTask(taskWithId);
          setEditedTask(taskWithId);
        } else {
          console.error("Task not found.");
        }
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    }

    fetchTask();
  }, [taskId]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask(prevTask => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    try {
      // Update the task in localStorage
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const updatedTasks = storedTasks.map(t => (t._id === taskId.id ? editedTask : t));
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTask(editedTask);
      alert("Task updated successfully");
    } catch (error) {
      console.error("Error updating task:", error);
      alert("Error updating task! Please try again later.");
    }
  };

  const handleDelete = () => {
    try {
      // Remove the task from localStorage
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const updatedTasks = storedTasks.filter(t => t._id !== taskId.id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTask(null);
      setEditedTask(null);
      alert("Task deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Error deleting task! Please try again later.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {task ? (
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleInputChange}
            className="border-b border-gray-300 w-full py-2 px-3 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Title"
          />
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleInputChange}
            className="border-b border-gray-300 w-full py-2 px-3 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Description"
          />
          <input
            type="text"
            name="status"
            value={editedTask.status}
            onChange={handleInputChange}
            className="border-b border-gray-300 w-full py-2 px-3 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Status"
          />
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate.substring(0, 10)}
            onChange={handleInputChange}
            className="border-b border-gray-300 w-full py-2 px-3 mb-4 focus:outline-none focus:border-blue-500"
            placeholder="Due Date"
          />
          <div className="flex justify-end">
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TaskDetail;
