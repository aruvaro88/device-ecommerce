export const SearchBar = ({ searchString, setSearchString }) => (
  <input
    type="text"
    placeholder="Buscar por marca o modelo"
    value={searchString}
    onChange={(e) => setSearchString(e.target.value)}
    className="border p-2 w-full"
  />
)
