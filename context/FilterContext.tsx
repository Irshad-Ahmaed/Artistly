"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Filters = {
  category: string[]
  location: string
  priceRange: string
}

const defaultFilters: Filters = {
  category: [],
  location: "",
  priceRange: "",
}

const FilterContext = createContext<{
  filters: Filters
  setFilters: (filters: Filters) => void
}>({
  filters: defaultFilters,
  setFilters: () => {},
})

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext)