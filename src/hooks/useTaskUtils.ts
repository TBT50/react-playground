import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import { Tasks } from "./../types";

import { supabase } from "./../config/supabaseClient";

export const useTaskUtils = () => {
  const [tasks, setTasks] = useState<Tasks>([]);
  const [newTaskInputValue, setNewTaskInputValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNewTaskInputValue(event.target.value);

  const handleAddTask = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      taskName: newTaskInputValue,
    };

    try {
      const { error } = await supabase.from("tasks").insert(newTask);
      setTasks([...tasks, newTask]);
      setNewTaskInputValue("");
    } catch (error) {}
  };

  const handleDeleteTask = async (id: string) => {
    try {
      const { error } = await supabase.from("tasks").delete().eq("id", id);
      const newTasks = tasks.filter((task) => id !== task.id);
      setTasks(newTasks);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const fetchTasks = async () => {
    try {
      const { data } = await supabase.from("tasks").select();
      if (data) {
        const tasksData: Tasks = data;
        setTasks(tasksData);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
      return null;
    }
  };

  return {
    tasks,
    handleAddTask,
    handleNewTaskChange,
    newTaskInputValue,
    handleDeleteTask,
    fetchTasks,
    loading,
  };
};
