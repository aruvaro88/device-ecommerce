import { Link } from "react-router-dom"

export const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
    <Link to={`/product/${product.id}`} className="block p-4">
      <div className="h-48 flex items-center justify-center">
        <img src={product.imgUrl} alt={product.model} className="max-h-full" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.brand}</h3>
        <p className="text-sm text-gray-600">{product.model}</p>
        <p className="mt-2 text-xl font-bold text-blue-600">{product.price || "-"}€</p>
      </div>
    </Link>
  </div>
)
