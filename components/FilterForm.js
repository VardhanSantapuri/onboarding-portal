"use client";
import { useState } from "react";

export default function FilterForm({ onSubmit }) {
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role || !department || !level) {
      alert("Please fill in all fields.");
      return;
    }
    onSubmit(role, department, level);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white dark:bg-gray-900/80 shadow-xl rounded-xl p-6 mt-4">
      <input
        type="text"
        placeholder="Role (e.g., developer)"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
      />
      <input
        type="text"
        placeholder="Department (e.g., engineering)"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
      />
      <input
        type="text"
        placeholder="Level (e.g., junior)"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-400 text-white dark:text-gray-900 font-semibold py-3 rounded-md hover:opacity-90 transition"
      >
        Generate Checklist
      </button>
    </form>
  );
}
