import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

export default function Calendario() {
  const [selected, setSelected] = useState()

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Selecciona una fecha
      </h2>
      <DayPicker 
        mode="single" 
        selected={selected} 
        onSelect={setSelected} 
        className="bg-white dark:bg-gray-900 rounded-lg"
      />
      {selected && (
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Fecha seleccionada: {selected.toLocaleDateString()}
        </p>
      )}
    </div>
  )
}
