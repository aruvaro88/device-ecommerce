import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { ProductCard } from "../components/ProductCard.jsx"

describe("ProductCard", () => {
  const product = {
    id: "1",
    brand: "TestBrand",
    model: "TestModel",
    price: "100",
    imgUrl: "/img.jpg",
  }

  it("renders brand, model, price and link", () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    )

    expect(screen.getByText("TestBrand")).toBeInTheDocument()
    expect(screen.getByText("TestModel")).toBeInTheDocument()
    expect(screen.getByText("100€")).toBeInTheDocument()

    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "/product/1")

    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("src", "/img.jpg")
    expect(img).toHaveAttribute("alt", "TestModel")
  })
})
