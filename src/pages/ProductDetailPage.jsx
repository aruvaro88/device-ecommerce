import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getProductDetail } from "../api/api"
import Header from "../components/Header"

export const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProductDetail(id).then(setProduct)
  }, [id])

  if (!product) return <div>Cargando...</div>

  return (
    <div>
      <Header currentPage="Detalle del Producto" />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <h1>{product.model}</h1>
        <div>
          <Link to="/" className="block mt-4 text-blue-600 underline">
            ← Volver al listado
          </Link>
        </div>
      </div>
    </div>
  )
}
