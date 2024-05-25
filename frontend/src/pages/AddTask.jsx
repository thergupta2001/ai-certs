import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const AddTaskForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskId = uuidv4();
    const taskData = { ...formData, _id: taskId };

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const updatedTasks = [...existingTasks, taskData];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setFormData({
      title: "",
      description: "",
      status: "pending",
      dueDate: "",
    });

    alert("Task added successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add Task</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {/* Form inputs */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter description"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-gray-700 text-sm font-bold mb-2">Due Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;