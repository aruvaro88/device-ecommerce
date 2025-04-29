import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SearchBar } from "../components/SearchBar.jsx"

describe("SearchBar", () => {
  it("renders with placeholder and reflects value", () => {
    const handleChange = vi.fn()
    render(<SearchBar searchString="foo" onChange={handleChange} />)
    expect(screen.getByPlaceholderText(/buscar marca o modelo/i)).toBeInTheDocument()
    expect(screen.getByDisplayValue("foo")).toBeInTheDocument()
  })

  it("calls onChange when typing", async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<SearchBar searchString="" onChange={handleChange} />)
    await user.type(screen.getByRole("textbox"), "abc")
    expect(handleChange).toHaveBeenCalledTimes(3)
  })
})
