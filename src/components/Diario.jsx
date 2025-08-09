import React, { useState, useEffect } from "react";

const fuentes = [
  { label: "Sans Serif", value: "Arial, sans-serif" },
  { label: "Serif", value: "Georgia, serif" },
  { label: "Monospace", value: "'Courier New', monospace" },
  { label: "Cursive", value: "'Comic Sans MS', cursive, sans-serif" },
];

export default function Diario({ fecha }) {
  const [texto, setTexto] = useState("");
  const [colorFondo, setColorFondo] = useState("#ffffff");
  const [colorBorde, setColorBorde] = useState("#000000");
  const [colorLetra, setColorLetra] = useState("#000000");
  const [tamLetra, setTamLetra] = useState("16");
  const [fuente, setFuente] = useState(fuentes[0].value);

  useEffect(() => {
    setTexto(localStorage.getItem(`diario-texto-${fecha}`) || "");
    setColorFondo(localStorage.getItem(`diario-fondo-${fecha}`) || "#ffffff");
    setColorBorde(localStorage.getItem(`diario-borde-${fecha}`) || "#000000");
    setColorLetra(localStorage.getItem(`diario-letra-color-${fecha}`) || "#000000");
    setTamLetra(localStorage.getItem(`diario-letra-tam-${fecha}`) || "16");
    setFuente(localStorage.getItem(`diario-letra-fuente-${fecha}`) || fuentes[0].value);
  }, [fecha]);

  const guardarTexto = (value) => {
    setTexto(value);
    localStorage.setItem(`diario-texto-${fecha}`, value);
  };

  const guardarColorFondo = (color) => {
    setColorFondo(color);
    localStorage.setItem(`diario-fondo-${fecha}`, color);
  };

  const guardarColorBorde = (color) => {
    setColorBorde(color);
    localStorage.setItem(`diario-borde-${fecha}`, color);
  };

  const guardarColorLetra = (color) => {
    setColorLetra(color);
    localStorage.setItem(`diario-letra-color-${fecha}`, color);
  };

  const guardarTamLetra = (tam) => {
    setTamLetra(tam);
    localStorage.setItem(`diario-letra-tam-${fecha}`, tam);
  };

  const guardarFuente = (fuente) => {
    setFuente(fuente);
    localStorage.setItem(`diario-letra-fuente-${fecha}`, fuente);
  };

  return (
    <div
      className="p-4 min-h-[300px] max-w-4xl mx-auto rounded-lg shadow-lg"
      style={{
        backgroundColor: colorFondo,
        border: `6px dashed ${colorBorde}`,
        boxShadow: `0 0 10px ${colorBorde}`,
        fontFamily: fuente,
        color: colorLetra,
        fontSize: `${tamLetra}px`,
      }}
    >
      <h2 className="text-xl font-bold mb-4">Diario para {fecha}</h2>

      <div className="mb-4 flex flex-wrap gap-6">
        <div>
          <label className="block mb-1 font-semibold">Color de fondo</label>
          <input
            type="color"
            value={colorFondo}
            onChange={(e) => guardarColorFondo(e.target.value)}
            className="w-16 h-8 cursor-pointer border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Color del borde</label>
          <input
            type="color"
            value={colorBorde}
            onChange={(e) => guardarColorBorde(e.target.value)}
            className="w-16 h-8 cursor-pointer border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Color de letra</label>
          <input
            type="color"
            value={colorLetra}
            onChange={(e) => guardarColorLetra(e.target.value)}
            className="w-16 h-8 cursor-pointer border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Tamaño de letra</label>
          <input
            type="number"
            min="12"
            max="36"
            value={tamLetra}
            onChange={(e) => guardarTamLetra(e.target.value)}
            className="w-16 p-1 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Fuente</label>
          <select
            value={fuente}
            onChange={(e) => guardarFuente(e.target.value)}
            className="p-1 border rounded"
          >
            {fuentes.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <textarea
        className="w-full h-64 p-3 border rounded resize-none"
        value={texto}
        onChange={(e) => guardarTexto(e.target.value)}
        placeholder="Escribe aquí lo que quieras..."
        style={{
          fontFamily: fuente,
          color: colorLetra,
          fontSize: `${tamLetra}px`,
        }}
      />
    </div>
  );
}
