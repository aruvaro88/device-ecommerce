import { getCachedData, setCachedData } from "./cache"

const BASE_URL = "https://itx-frontend-test.onrender.com"

export const getProducts = async () => {
  const cached = getCachedData("products")
  if (cached) return cached

  const res = await fetch(`${BASE_URL}/api/product`)
  const data = await res.json()
  setCachedData("products", data)
  return data
}

export const getProductDetail = async (id) => {
  const cached = getCachedData(`product-${id}`)
  if (cached) return cached

  const res = await fetch(`${BASE_URL}/api/product/${id}`)
  const data = await res.json()
  setCachedData(`product-${id}`, data)
  return data
}

export const addToCart = async ({ id, colorCode, storageCode }) => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, colorCode, storageCode }),
  })
  return res.json()
}
