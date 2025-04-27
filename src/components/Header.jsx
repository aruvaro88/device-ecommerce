import { Link, useLocation } from "react-router-dom"
import { useCart } from "../hooks/useCart"
import { useSearch } from "../hooks/useSearch"
import { SearchBar } from "./SearchBar"

const Header = () => {
  const { cartCount } = useCart()
  const { searchString, setSearchString } = useSearch()
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-200">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold">
          <img src="/device_ecommerce_logo_full.svg" alt="Logo" className="h-18" />
        </Link>
        <span>{isHome ? "Listado de Productos" : "Detalle del Producto"}</span>
      </div>
      {isHome && (
        <div className="mt-2 md:mt-0 w-full md:w-1/3">
          <SearchBar searchString={searchString} setSearchString={setSearchString} />
        </div>
      )}
      <div className="flex items-center space-x-2 mt-2 md:mt-0">
        <span>{cartCount}</span>
      </div>
    </header>
  )
}

export default Header
