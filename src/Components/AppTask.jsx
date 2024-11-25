import React, { useState, useEffect } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";
import Footer from "./Footer";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Préparer la réunion",
      category: "travail",
      dueDate: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
    },
    {
      id: 2,
      title: "Faire les courses",
      category: "personnel",
      dueDate: new Date(new Date().getTime() + 4 * 60 * 60 * 1000),
    },
    {
      id: 3,
      title: "Envoyer un email important",
      category: "travail",
      dueDate: new Date(new Date().getTime() + 1 * 60 * 60 * 1000),
    },
  ]);

  const [filter, setFilter] = useState("all");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((task) => task.category === filter);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      tasks.forEach((task) => {
        const timeDiff = task.dueDate - now;
        if (timeDiff > 0 && timeDiff <= 60000) {
          alert(
            `Rappel : La tâche "${task.title}" dans la catégorie "${task.category}" est presque à échéance !`
          );
        }
      });
    }, 30000);
    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-3xl font-bold text-center py-6 bg-cyan-600 text-white">
          Gestion de Tâches
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Colonne gauche : Gestion */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Ajouter et Filtrer
            </h2>
            <AddTaskForm onAddTask={addTask} />
            <TaskFilter filter={filter} setFilter={setFilter} />
          </div>

          {/* Colonne droite : Liste des tâches */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Liste des Tâches
            </h2>
            <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
