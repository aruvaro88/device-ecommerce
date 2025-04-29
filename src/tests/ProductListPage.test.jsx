import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import * as api from "../api/api.js"
import { ProductListPage } from "../pages/ProductListPage.jsx"

describe("ProductListPage", () => {
  const fake = [
    { id: "1", brand: "A", model: "X", price: "10", imgUrl: "" },
    { id: "2", brand: "B", model: "Y", price: "20", imgUrl: "" },
  ]

  beforeEach(() => {
    vi.spyOn(api, "getProducts").mockResolvedValue(fake)
  })

  it("fetches and displays products, filters by search", async () => {
    render(
      <MemoryRouter>
        <ProductListPage />
      </MemoryRouter>
    )
    await waitFor(() => expect(api.getProducts).toHaveBeenCalled())
    expect(screen.getByText("A")).toBeInTheDocument()
    expect(screen.getByText("B")).toBeInTheDocument()

    const input = screen.getByPlaceholderText(/buscar marca o modelo/i)
    await userEvent.type(input, "B")
    expect(screen.queryByText("A")).toBeNull()
    expect(screen.getByText("B")).toBeInTheDocument()
  })
})
