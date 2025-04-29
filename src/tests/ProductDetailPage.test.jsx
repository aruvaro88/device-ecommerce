import { render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import * as api from "../api/api.js"
import { CartProvider } from "../context/CartContext.jsx"

import { ProductDetailPage } from "../pages/ProductDetailPage.jsx"

describe("ProductDetailPage", () => {
  const fake = {
    id: "1",
    brand: "A",
    model: "X",
    price: "10",
    imgUrl: "",
    cpu: "C",
    ram: "2GB",
    os: "OS",
    displayResolution: "HD",
    battery: "3000mAh",
    primaryCamera: "12MP",
    secondaryCmera: "5MP",
    dimentions: "10x5",
    weight: "150g",
    colors: ["red"],
    internalMemory: ["32GB"],
  }

  beforeEach(() => {
    vi.spyOn(api, "getProductDetail").mockResolvedValue(fake)
  })

  it("fetches and displays product detail", async () => {
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <CartProvider>
          <Routes>
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </CartProvider>
      </MemoryRouter>
    )

    await waitFor(() => expect(api.getProductDetail).toHaveBeenCalledWith("1"))
    expect(screen.getByText("A X")).toBeInTheDocument()
    expect(screen.getByText("10€", { selector: "p" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /añadir al carrito/i })).toBeInTheDocument()
  })
})
