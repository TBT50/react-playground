import { useState } from "react";
import "./App.css";

import { TasksList } from "./components/TasksList";
import { Form } from "./components/Form";

import { Tasks } from "./types";

function App() {
  const [tasks, setTasks] = useState<Tasks>([
    { id: 1, name: "Task 1" },
    { id: 2, name: "Task 2" },
  ]);
  const [newTaskInputValue, setNewTaskInputValue] = useState("");

  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewTaskInputValue(event.target.value);

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask = {
      id: Math.random(),
      name: newTaskInputValue,
    };
    setTasks([...tasks, newTask]);
    setNewTaskInputValue("");
  };

  const handleDeleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => id !== task.id);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Form
        handleAddTask={handleAddTask}
        handleNewTaskChange={handleNewTaskChange}
        newTaskInputValue={newTaskInputValue}
      />
      {tasks.length > 0 && (
        <TasksList handleDeleteTask={handleDeleteTask} tasks={tasks} />
      )}
    </div>
  );
}

export default App;
