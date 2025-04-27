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

  if (!product) {
    return <div className="container mx-auto px-6 py-8 text-center">Cargando…</div>
  }

  return (
    <main className="container mx-auto px-6 py-8">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex-1 mb-6 lg:mb-0">
          <ProductImage imgUrl={product.imgUrl} model={product.model} />
        </div>
        <div className="flex-1 space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {product.brand} {product.model}
          </h1>
          <p className="text-xl text-blue-600 font-semibold">{product.price || "-"}€</p>
          <ProductDescription product={product} />
          <ProductActions product={product} />
          <Link to="/" className="inline-block text-blue-600 hover:underline mt-4">
            Volver a Productos
          </Link>
        </div>
      </div>
    </main>
  )
}
