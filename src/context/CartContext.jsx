import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const savedCount = localStorage.getItem("cartCount")
  const initialCount = savedCount ? Number(savedCount) : 0
  const [cartCount, setCartCount] = useState(initialCount)

  const incrementCart = (newCount) => {
    setCartCount((prev) => prev + newCount)
  }
  const clearCart = () => {
    setCartCount(0)
    localStorage.removeItem("cartCount")
  }

  useEffect(() => {
    localStorage.setItem("cartCount", cartCount)
  }, [cartCount])

  return <CartContext.Provider value={{ cartCount, incrementCart, clearCart }}>{children}</CartContext.Provider>
}
