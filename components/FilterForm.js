export default function FilterForm({ filters, setFilters, fetchTasks }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchTasks();
      }}
      className="flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="Role"
        value={filters.role}
        onChange={(e) => setFilters({ ...filters, role: e.target.value })}
        className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Department"
        value={filters.department}
        onChange={(e) => setFilters({ ...filters, department: e.target.value })}
        className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Level"
        value={filters.level}
        onChange={(e) => setFilters({ ...filters, level: e.target.value })}
        className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Load Checklist
      </button>
    </form>
  );
}
