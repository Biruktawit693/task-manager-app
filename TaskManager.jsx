import { useState, useEffect } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          className="p-2 rounded flex-1 text-black"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 rounded ${
              task.completed ? "bg-green-600 line-through" : "bg-gray-800"
            }`}
          >
            <span onClick={() => toggleTask(task.id)}>{task.text}</span>
            <button
              className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
