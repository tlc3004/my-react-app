import React, { useState } from 'react'
import Diario from './components/Diario'
import Calendario from './components/Calendario'
function App() {
  const [ventana, setVentana] = useState('diario') // 'diario' o 'calendario'

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex flex-col items-center">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 mb-1">
          Diario y Calendario
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Navega entre las ventanas sin perder datos.
        </p>
      </header>

      <nav className="mb-6 space-x-4">
        <button
          onClick={() => setVentana('diario')}
          className={`px-4 py-2 rounded ${
            ventana === 'diario' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          Diario
        </button>
        <button
          onClick={() => setVentana('calendario')}
          className={`px-4 py-2 rounded ${
            ventana === 'calendario' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          Calendario
        </button>
      </nav>

      <main className="w-full max-w-3xl">
        {ventana === 'diario' && <Diario />}
        {ventana === 'calendario' && <Calendario />}
      </main>
    </div>
  )
}

export default App