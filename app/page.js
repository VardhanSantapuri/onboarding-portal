"use client";
import { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import FilterForm from "../components/FilterForm";
import Checklist from "../components/Checklist";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTasks = async (role, department, level) => {
    setLoading(true);
    const q = query(
      collection(db, "onboarding"),
      where("role", "==", role),
      where("department", "==", department),
      where("level", "==", level)
    );

    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(...doc.data().tasks);
    });
    setTasks(data);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
          🚀 Onboarding Portal
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Get your personalized onboarding checklist based on your role,
          department, and level.
        </p>
        <FilterForm onSubmit={fetchTasks} />
        {loading ? (
          <p className="text-gray-600 dark:text-gray-300">Loading checklist...</p>
        ) : (
          tasks.length > 0 && <Checklist tasks={tasks} />
        )}
      </div>
    </main>
  );
}
