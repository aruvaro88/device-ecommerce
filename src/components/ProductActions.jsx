import { useState } from "react"
import { addToCart } from "../api/api"
import { useCart } from "../hooks/useCart"

export const ProductActions = ({ product }) => {
  const { incrementCart } = useCart()
  const [color, setColor] = useState(product.colors[0] || "")
  const [storage, setStorage] = useState(product.internalMemory[0] || "")

  const handleAdd = async () => {
    const { count } = await addToCart({
      id: product.id,
      colorCode: color,
      storageCode: storage,
    })
    incrementCart(count)
  }

  return (
    <div className="space-y-4">
      <select value={color} onChange={(e) => setColor(e.target.value)} className="border p-2 w-full">
        {product.colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>

      <select value={storage} onChange={(e) => setStorage(e.target.value)} className="border p-2 w-full">
        {product.internalMemory.map((memory) => (
          <option key={memory} value={memory}>
            {memory}
          </option>
        ))}
      </select>

      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
        Añadir al carrito
      </button>
    </div>
  )
}
