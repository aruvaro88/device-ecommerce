import { useEffect, useState } from "react"
import { getProducts } from "../api/api"
import { ProductCard } from "../components/ProductCard"
import { SearchBar } from "../components/SearchBar"

export const ProductListPage = () => {
  const [products, setProducts] = useState([])
  const [searchString, setSearchString] = useState("")

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  const filtered = products.filter(
    (p) => p.brand.toLowerCase().includes(searchString.toLowerCase()) || p.model.toLowerCase().includes(searchString.toLowerCase())
  )

  const handleChange = (e) => {
    setSearchString(e.target.value)
  }

  return (
    <main className="container mx-auto px-6 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Nuestros Productos</h1>
        <div className="w-full sm:w-1/3 mt-4 sm:mt-0">
          <SearchBar searchString={searchString} onChange={handleChange} />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3">
        {filtered.map((p) => (
          <div key={p.id} className="px-3 mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </main>
  )
}
