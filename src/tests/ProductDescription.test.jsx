import { render, screen } from "@testing-library/react"
import { ProductDescription } from "../components/ProductDescription.jsx"

describe("ProductDescription", () => {
  const pr = {
    brand: "B",
    model: "M",
    price: "5",
    cpu: "C",
    ram: "R",
    os: "O",
    displayResolution: "D",
    battery: "Bat",
    primaryCamera: "PC",
    secondaryCmera: "SC",
    dimentions: "Dim",
    weight: "W",
  }

  it("list all attributes correctly", () => {
    render(<ProductDescription product={pr} />)

    const items = screen.getAllByRole("listitem")
    const texts = items.map((li) => li.textContent.replace(/\s+/g, " ").trim())

    expect(texts).toContain("Marca: B")
    expect(texts).toContain("Modelo: M")
    expect(texts).toContain("Precio: 5€")
    expect(texts).toContain("CPU: C")
    expect(texts).toContain("RAM: R")
    expect(texts).toContain("SO: O")
    expect(texts).toContain("Resolución: D")
    expect(texts).toContain("Batería: Bat")
    expect(texts).toContain("Cámaras: PC / SC")
    expect(texts).toContain("Dimensiones: Dim")
    expect(texts).toContain("Peso: W")
  })
})
