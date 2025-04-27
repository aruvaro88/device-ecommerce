import React from "react"

export const OptionSelector = ({ label, options, selected, onSelect }) => {
  const baseClass = "inline-flex items-center justify-center rounded-lg border-2 cursor-pointer"
  const selectedClass = "border-blue-600 bg-blue-50"
  const unselectedClass = "border-gray-300 hover:border-gray-500"

  return (
    <div>
      <h4 className="font-medium text-gray-700 mb-2">{label}</h4>
      <div className="flex space-x-3">
        {options.map((opt) => {
          const isSelected = opt === selected
          return (
            <button
              key={opt}
              onClick={() => onSelect(opt)}
              className={`${baseClass} px-4 py-2 ${isSelected ? selectedClass : unselectedClass} transition`}
            >
              <span className="text-sm whitespace-nowrap">{opt}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
