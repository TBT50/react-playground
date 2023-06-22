import { useEffect } from "react";

import "./App.css";

import { TasksList } from "./components/TasksList";
import { Form } from "./components/Form";

import { useTaskUtils } from "./hooks/useTaskUtils";

function App() {
  const {
    tasks,
    handleAddTask,
    handleNewTaskChange,
    newTaskInputValue,
    handleDeleteTask,
    fetchTasks,
    loading,
  } = useTaskUtils();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-sm mx-auto mt-8 px-4">
      <Form
        handleAddTask={handleAddTask}
        handleNewTaskChange={handleNewTaskChange}
        newTaskInputValue={newTaskInputValue}
      />
      {loading ? (
        <p className="mt-8">Loading...</p>
      ) : (
        <TasksList handleDeleteTask={handleDeleteTask} tasks={tasks} />
      )}
    </div>
  );
}

export default App;
