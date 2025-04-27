import { Link } from "react-router-dom"

export const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="border p-4 flex flex-col items-center">
      <img src={product.imgUrl} alt={product.model} className="h-40 object-contain" />
      <h2 className="font-bold">{product.brand}</h2>
      <p>{product.model}</p>
      <p className="text-blue-600 font-semibold">{product.price}€</p>
    </Link>
  )
}
