import { Link } from "react-router-dom"
import { useCart } from "../hooks/useCart"

const Header = ({ currentPage }) => {
  const { cartCount } = useCart()

  return (
    <header className="flex justify-between items-center p-4 bg-gray-200">
      <Link to="/" className="text-2xl font-bold">
        Mi Tienda
      </Link>
      <nav className="flex items-center space-x-4">
        <span>{currentPage}</span>
        <span>{cartCount}</span>
      </nav>
    </header>
  )
}

export default Header
