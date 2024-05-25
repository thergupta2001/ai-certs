import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-md p-4 mb-4 w-64 h-64 flex flex-col justify-center items-center cursor-pointer shadow-all hover:bg-slate-400"
      onClick={() => { navigate(`/task/${task._id}`) }}
    >
      <div>
        <h2 className="text-xl font-bold mb-2">{task.title}</h2>
        <p className="text-sm text-gray-600 mb-1">Status: <span className="font-semibold">{task.status}</span></p>
        <p className="text-sm text-gray-600">Due Date: <span className="font-semibold">{new Date(task.dueDate).toLocaleDateString()}</span></p>
      </div>
    </div>
  );
};


TaskCard.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
  }).isRequired,
};

export const Tasks = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    (async function getTasks() {
      const response = await axios.get("http://localhost:8000/user/tasks");
      alert(response.data.message);

      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(storedTasks);
    })();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task List</h1>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={() => { navigate("/create") }}  
        >
            Create Task
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskCard
              key={task._id}
              task={task}
            />
          ))
        ) : (
          <p className="text-gray-600">No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default Tasks;