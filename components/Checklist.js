"use client";

export default function Checklist({ tasks }) {
  return (
    <div className="mt-6 bg-white dark:bg-gray-900/80 shadow-lg rounded-xl p-6 w-full">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Your Checklist
      </h2>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm"
          >
            ✅ {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
