import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProductListPage } from "../pages/ProductListPage"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
