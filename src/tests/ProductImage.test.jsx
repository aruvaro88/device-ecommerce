import { render, screen } from "@testing-library/react"
import { ProductImage } from "../components/ProductImage.jsx"

describe("ProductImage", () => {
  it("renders img with src/alt", () => {
    render(<ProductImage imgUrl="/x.jpg" model="X" />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("src", "/x.jpg")
    expect(img).toHaveAttribute("alt", "X")
  })
})
