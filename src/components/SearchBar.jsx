export const SearchBar = ({ searchString, onChange }) => (
  <input
    type="text"
    placeholder="Buscar marca o modelo…"
    value={searchString}
    onChange={onChange}
    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
  />
)
