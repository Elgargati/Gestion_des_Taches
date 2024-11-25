import React from "react";

const TaskList = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <p className="text-gray-500 text-center">Aucune tâche disponible.</p>
    );
  }

  return (
    <ul>
      {tasks.map((task) => {
        // Formater la date
        const formattedDate = task.dueDate.toLocaleString("fr-FR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        });

        return (
          <li
            key={task.id}
            className="border p-4 mb-3 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
          >
            <div>
              <p className="font-bold text-lg">{task.title}</p>
              <p className="text-sm text-gray-500">
                Catégorie :{" "}
                <span
                  className={`px-2 py-1 rounded text-white text-xs ${
                    task.category === "travail" ? "bg-blue-500" : "bg-green-500"
                  }`}
                >
                  {task.category}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Échéance : <span className="text-red-500">{formattedDate}</span>
              </p>
            </div>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded mt-2"
            >
              Supprimer
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
