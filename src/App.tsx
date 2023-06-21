import { useState } from "react";
import "./App.css";

import { TasksList } from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState<string[]>([
    "First task",
    "Second task",
    "Third task",
  ]);
  const [newTaskInputValue, setNewTaskInputValue] = useState("");

  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewTaskInputValue(event.target.value);

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks([...tasks, newTaskInputValue]);
    setNewTaskInputValue("");
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <form onSubmit={handleAddTask} className="max-w-sm mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="task" className="block text-gray-700 cursor-pointer">
            New task
          </label>
          <input
            type="text"
            id="task"
            className="block w-full px-4 py-2 mt-1 border-2 border-indigo-500 rounded-md shadow-sm"
            onChange={handleNewTaskChange}
            value={newTaskInputValue}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
        >
          Add
        </button>
      </form>
      {tasks.length > 0 && (
        <TasksList handleDeleteTask={handleDeleteTask} tasks={tasks} />
      )}
    </div>
  );
}

export default App;
