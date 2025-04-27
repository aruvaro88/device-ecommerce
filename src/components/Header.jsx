import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import React from "react"
import { Link, useLocation } from "react-router-dom"
import { useCart } from "../hooks/useCart"

export const Header = () => {
  const { cartCount } = useCart()
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/device_ecommerce_logo_full.svg" alt="Logo" className="h-10" />
          <span className="ml-2 text-2xl font-bold text-gray-800">Mi Tienda</span>
        </Link>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-2 text-sm text-gray-600">
          {isHome ? (
            <>
              Inicio / <span className="font-semibold">Productos</span>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-gray-900">
                Productos
              </Link>
              <span className="px-2">/</span>
              <span className="font-semibold">Detalle</span>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
