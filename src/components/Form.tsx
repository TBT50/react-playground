type FormProps = {
  handleAddTask: (event: React.FormEvent<HTMLFormElement>) => void;
  handleNewTaskChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newTaskInputValue: string;
};

export const Form = ({
  handleAddTask,
  handleNewTaskChange,
  newTaskInputValue,
}: FormProps) => {
  return (
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
  );
};
