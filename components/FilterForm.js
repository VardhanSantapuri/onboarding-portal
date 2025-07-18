export default function FilterForm({
  role,
  setRole,
  department,
  setDepartment,
  level,
  setLevel,
  fetchChecklist,
}) {
  return (
    <div className="flex flex-col space-y-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Role (e.g., developer)"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Department (e.g., engineering)"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Level (e.g., junior)"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={fetchChecklist}
        className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition"
      >
        Load Checklist
      </button>
    </div>
  );
}
