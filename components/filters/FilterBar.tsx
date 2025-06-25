"use client"

import { CategoryFilter } from "./CategoryFilter"
import { LocationFilter } from "./LocationFilter"
import { PriceFilter } from "./PriceFilter"

export const FilterBar = () => {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="w-fit">
        <CategoryFilter />
      </div>
      <div className="flex gap-5">
        <LocationFilter />
        <PriceFilter />
      </div>
    </div>
  )
}