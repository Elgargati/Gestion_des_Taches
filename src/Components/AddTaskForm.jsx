import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask || !category || !dueDate) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    onAddTask({
      id: Date.now(),
      title: newTask,
      category,
      dueDate: new Date(dueDate),
    });
    setNewTask("");
    setCategory("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border p-2 w-full mb-2 rounded-full"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full mb-2 rounded-full"
      >
        <option value="">Choisir une catégorie</option>
        <option value="personnel">Personnel</option>
        <option value="travail">Travail</option>
      </select>
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 w-full mb-2 rounded-full"
      />
      <button
        type="submit"
        className="w-full bg-cyan-700 hover:bg-cyan-900 text-white font-semibold py-2 px-4  rounded-full"
      >
        Ajouter une Tâche
      </button>
    </form>
  );
};

export default AddTaskForm;
