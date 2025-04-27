const BASE_URL = "https://itx-frontend-test.onrender.com"

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/api/product`)
  const data = await res.json()
  return data
}
