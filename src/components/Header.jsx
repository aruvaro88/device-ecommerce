import { Link, useLocation } from "react-router-dom"
import { useCart } from "../hooks/useCart"

const Header = () => {
  const { cartCount } = useCart()

  const location = useLocation()
  const isHome = location.pathname === "/"
  const { clearCart } = useCart()

  return (
    <>
      <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-200">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold">
            <img src="/device_ecommerce_logo_full.svg" alt="Logo" className="h-18" />
          </Link>
        </div>

        <button onClick={clearCart} className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Vaciar carrito
        </button>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <span>{cartCount}</span>
        </div>
      </header>
      <span>{isHome ? "Productos" : "Productos / Detalle"}</span>
    </>
  )
}

export default Header
