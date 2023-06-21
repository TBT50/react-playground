type TasksListProps = {
  tasks: string[];
  handleDeleteTask: (index: number) => void;
};

export const TasksList = ({ tasks, handleDeleteTask }: TasksListProps) => {
  return (
    <ul className="max-w-sm mx-auto mt-8">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="py-2 px-4 mb-2 bg-white rounded-md shadow-md flex items-center justify-between"
        >
          <span className="mr-4">{task}</span>
          <button
            onClick={() => handleDeleteTask(index)}
            type="button"
            className="px-3 py-1 text-sm text-red-600 bg-transparent border border-red-600 rounded-md hover:bg-red-600 hover:text-white"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
