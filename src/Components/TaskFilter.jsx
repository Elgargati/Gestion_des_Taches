import React from "react";

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="mb-4">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full border p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
      >
        <option value="all">Toutes les catégories</option>
        <option value="personnel">Personnel</option>
        <option value="travail">Travail</option>
      </select>
    </div>
  );
};

export default TaskFilter;
