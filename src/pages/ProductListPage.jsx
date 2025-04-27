import React, { useEffect, useState } from "react"
import { getProducts } from "../api/api"
import { ProductCard } from "../components/ProductCard"
import { SearchBar } from "../components/SearchBar"
import { useSearch } from "../hooks/useSearch"
export const ProductListPage = () => {
  const [products, setProducts] = useState([])
  const { searchString, setSearchString } = useSearch()

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products)
    })
  }, [])

  const filteredProducts = products.filter(
    (elm) => elm.brand.toLowerCase().includes(searchString.toLowerCase()) || elm.model.toLowerCase().includes(searchString.toLowerCase())
  )

  return (
    <>
      <div className="mt-2 md:mt-0 w-full md:w-1/3">
        <SearchBar searchString={searchString} setSearchString={setSearchString} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 p-16">
        {filteredProducts.map((elm) => (
          <ProductCard key={elm.id} product={elm} />
        ))}
      </div>
    </>
  )
}
