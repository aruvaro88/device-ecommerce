const BASE_URL = "https://itx-frontend-test.onrender.com"

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/api/product`)
  const data = await res.json()
  return data
}

export async function getProductDetail(id) {
  const res = await fetch(`${BASE_URL}/api/product/${id}`)
  const data = await res.json()
  return data
}

export const addToCart = async ({ id, colorCode, storageCode }) => {
  const res = await fetch(`${BASE_URL}/api/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, colorCode, storageCode }),
  })
  return await res.json()
}
