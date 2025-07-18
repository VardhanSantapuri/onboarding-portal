export default function Checklist({ tasks, completedTasks, toggleTask }) {
  return (
    <ul className="space-y-2 w-full max-w-md mt-4">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={`p-4 rounded shadow flex items-center space-x-2 ${
            completedTasks.includes(task) ? "bg-green-100" : "bg-white"
          }`}
        >
          <input
            type="checkbox"
            checked={completedTasks.includes(task)}
            onChange={() => toggleTask(task)}
            className="accent-blue-500 w-5 h-5"
          />
          <span
            className={`text-gray-800 ${
              completedTasks.includes(task) ? "line-through text-gray-500" : ""
            }`}
          >
            {task}
          </span>
        </li>
      ))}
    </ul>
  );
}

