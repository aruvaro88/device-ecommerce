import React, { useEffect, useState } from "react"
import { getProducts } from "../api/api"
import Header from "../components/Header"
import { ProductCard } from "../components/ProductCard"
export const ProductListPage = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products)
    })
  }, [])
  return (
    <>
      <Header currentPage="Listado de productos" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 p-16">
        {products.map((elm) => (
          <ProductCard key={elm.id} product={elm} />
        ))}
      </div>
    </>
  )
}
