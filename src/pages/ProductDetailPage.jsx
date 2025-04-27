import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getProductDetail } from "../api/api"
import { ProductActions } from "../components/ProductActions"
import { ProductDescription } from "../components/ProductDescription"
import { ProductImage } from "../components/ProductImage"

export const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProductDetail(id).then(setProduct)
  }, [id])

  if (!product) return <div className="p-4">Cargando…</div>

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProductImage imgUrl={product.imgUrl} model={product.model} />
      <div>
        <ProductDescription product={product} />
        <ProductActions product={product} />
        <Link to="/" className="block mt-4 text-blue-600 underline">
          Volver al listado
        </Link>
      </div>
    </div>
  )
}
