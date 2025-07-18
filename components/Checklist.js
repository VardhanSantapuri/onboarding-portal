import { useState, useEffect } from "react";

export default function Checklist({ tasks }) {
  const [checkedTasks, setCheckedTasks] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("checkedTasks")) || [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("checkedTasks", JSON.stringify(checkedTasks));
  }, [checkedTasks]);

  const toggleTask = (task) => {
    setCheckedTasks((prev) =>
      prev.includes(task) ? prev.filter((t) => t !== task) : [...prev, task]
    );
  };

  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <div
          key={index}
          onClick={() => toggleTask(task)}
          className={`cursor-pointer p-3 rounded-lg border transition ${
            checkedTasks.includes(task)
              ? "bg-green-100 dark:bg-green-700 border-green-400 dark:border-green-500 text-green-900 dark:text-green-100 line-through"
              : "bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
          }`}
        >
          {task}
        </div>
      ))}
    </div>
  );
}
