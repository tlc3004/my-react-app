import { useState, useEffect } from 'react'

function Diario() {
  const [nota, setNota] = useState('')
  const [fecha, setFecha] = useState(new Date().toISOString().slice(0, 10))
  const [guardado, setGuardado] = useState(false)

  useEffect(() => {
    const savedNota = localStorage.getItem(`nota-${fecha}`)
    if (savedNota) setNota(savedNota)
    else setNota('')
    setGuardado(false)
  }, [fecha])

  const guardarNota = () => {
    localStorage.setItem(`nota-${fecha}`, nota)
    setGuardado(true)
    setTimeout(() => setGuardado(false), 2000)
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Diario para {fecha}</h2>
      <input 
        type="date" 
        value={fecha} 
        onChange={e => setFecha(e.target.value)} 
        className="mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
      />
      <textarea 
        className="w-full h-56 p-4 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
        value={nota} 
        onChange={e => setNota(e.target.value)}
        placeholder="Escribe tu día aquí..."
      />
      <button 
        onClick={guardarNota} 
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition-colors"
      >
        Guardar Nota
      </button>
      {guardado && <p className="mt-3 text-green-600 font-medium">¡Nota guardada con éxito! ✅</p>}
    </div>
  )
}

export default Diario
