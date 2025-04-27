const ONE_HOUR = 60

export const getCachedData = (key) => {
  const storedData = JSON.parse(localStorage.getItem(key))
  if (!storedData) return null
  if (Date.now() > storedData.expiresAt) {
    localStorage.removeItem(key)
    return null
  }
  return storedData.data
}

export const setCachedData = (key, data) => {
  localStorage.setItem(key, JSON.stringify({ data, expiresAt: Date.now() + ONE_HOUR }))
}
