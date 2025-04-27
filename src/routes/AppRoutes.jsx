import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProductDetailPage } from "../pages/ProductDetailPage"
import { ProductListPage } from "../pages/ProductListPage"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
