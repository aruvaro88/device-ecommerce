import { Link } from "react-router-dom"

export const ProductCard = ({ product }) => (
  <Link to={`/product/${product.id}`} className="border p-4 flex flex-col items-center hover:shadow">
    <img src={product.imgUrl} alt={product.model} className="h-40 object-contain" />
    <h2 className="font-bold mt-2">{product.brand}</h2>
    <p>{product.model}</p>
    <p className="text-blue-600 font-semibold">{product.price || "-"}€</p>
  </Link>
)
