import { createContext, useState } from "react"

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [searchString, setSearchString] = useState("")

  return <SearchContext.Provider value={{ searchString, setSearchString }}>{children}</SearchContext.Provider>
}
