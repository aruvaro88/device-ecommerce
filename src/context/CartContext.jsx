import { createContext, useEffect, useState } from "react"
import { getCachedData, setCachedData } from "../api/cache"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const savedCount = getCachedData("cartCount")
  const [cartCount, setCartCount] = useState(savedCount ?? 0)

  const incrementCart = (newCount) => {
    setCartCount((prev) => prev + newCount)
  }

  useEffect(() => {
    setCachedData("cartCount", cartCount)
  }, [cartCount])

  return <CartContext.Provider value={{ cartCount, incrementCart }}>{children}</CartContext.Provider>
}
