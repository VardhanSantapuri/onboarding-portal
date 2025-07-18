"use client";

import { useEffect, useState } from "react";
import Checklist from "../components/Checklist";
import FilterForm from "../components/FilterForm";
import { db } from "./firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ role: "", department: "", level: "" });

  const fetchTasks = async () => {
    if (!filters.role || !filters.department || !filters.level) {
      alert("Please fill all fields to load your checklist.");
      return;
    }

    const q = query(
      collection(db, "checklists"),
      where("role", "==", filters.role),
      where("department", "==", filters.department),
      where("level", "==", filters.level)
    );

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const data = querySnapshot.docs[0].data();
      setTasks(data.tasks);
    } else {
      setTasks([]);
      alert("No checklist found for this combination.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
          Onboarding Portal
        </h1>
        <FilterForm filters={filters} setFilters={setFilters} fetchTasks={fetchTasks} />
        {tasks.length > 0 && (
          <div className="mt-8">
            <Checklist tasks={tasks} />
          </div>
        )}
      </div>
    </main>
  );
}
