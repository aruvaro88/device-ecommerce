import { CartProvider } from "./context/CartContext"
import { SearchProvider } from "./context/SearchContext"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <>
      <CartProvider>
        <SearchProvider>
          <AppRoutes />
        </SearchProvider>
      </CartProvider>
    </>
  )
}

export default App
