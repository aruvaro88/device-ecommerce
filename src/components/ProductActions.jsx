import { useState } from "react"
import { addToCart } from "../api/api"
import { useCart } from "../hooks/useCart"
import { OptionSelector } from "./OptionSelector"

export const ProductActions = ({ product }) => {
  const { incrementCart } = useCart()
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || "")
  const [selectedStorage, setSelectedStorage] = useState(product.internalMemory[0] || "")

  const handleAdd = async () => {
    const { count } = await addToCart({
      id: product.id,
      colorCode: selectedColor,
      storageCode: selectedStorage,
    })
    incrementCart(count)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <OptionSelector label="Color" options={product.colors} selected={selectedColor} onSelect={setSelectedColor} />

      <OptionSelector label="Almacenamiento" options={product.internalMemory} selected={selectedStorage} onSelect={setSelectedStorage} />

      <button onClick={handleAdd} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
        Añadir al carrito
      </button>
    </div>
  )
}
