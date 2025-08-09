import React from "react";

export default function Calendario({ fechaSeleccionada, onChangeFecha }) {
  return (
    <div className="max-w-sm mx-auto p-4">
      <label htmlFor="fecha" className="block mb-2 font-semibold">
        Selecciona una fecha:
      </label>
      <input
        type="date"
        id="fecha"
        value={fechaSeleccionada}
        onChange={(e) => onChangeFecha(e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
      />
    </div>
  );
}
