"use client";

import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import Checklist from "../components/Checklist";
import FilterForm from "../components/FilterForm";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");

  const [completedTasks, setCompletedTasks] = useState([]);

  const userId = "testUser123";

  const fetchChecklist = async () => {
    setLoading(true);
    try {
      let q = collection(db, "checklists");
      const conditions = [];

      if (role) conditions.push(where("role", "==", role));
      if (department) conditions.push(where("department", "==", department));
      if (level) conditions.push(where("level", "==", level));

      if (conditions.length > 0) {
        q = query(q, ...conditions);
      }

      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(...doc.data().tasks);
      });
      setTasks(data);

      const userDocRef = doc(db, "userProgress", userId);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        setCompletedTasks(userDocSnap.data().completedTasks || []);
      } else {
        await setDoc(userDocRef, { completedTasks: [] });
        setCompletedTasks([]);
      }
    } catch (error) {
      console.error("Error fetching checklist:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = async (task) => {
    const userDocRef = doc(db, "userProgress", userId);
    let updatedTasks = [];

    if (completedTasks.includes(task)) {
      updatedTasks = completedTasks.filter((t) => t !== task);
    } else {
      updatedTasks = [...completedTasks, task];
    }

    setCompletedTasks(updatedTasks);

    try {
      await updateDoc(userDocRef, { completedTasks: updatedTasks });
    } catch (error) {
      console.error("Error updating user progress:", error);
    }
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-50 p-8 space-y-4">
      <h1 className="text-2xl font-bold text-blue-600">Onboarding Checklist</h1>

      <FilterForm
        role={role}
        setRole={setRole}
        department={department}
        setDepartment={setDepartment}
        level={level}
        setLevel={setLevel}
        fetchChecklist={fetchChecklist}
      />

      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length > 0 ? (
        <Checklist
          tasks={tasks}
          completedTasks={completedTasks}
          toggleTask={toggleTask}
        />
      ) : (
        <p className="mt-4">No tasks to display.</p>
      )}
    </main>
  );
}
