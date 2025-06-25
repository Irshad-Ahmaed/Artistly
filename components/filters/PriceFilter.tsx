"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PRICE_RANGES } from "@/lib/constants"
import { useFilterContext } from "@/context/FilterContext"

export const PriceFilter =()=> {
  const { filters, setFilters } = useFilterContext()

  return (
    <div className="w-40">
      <p className="text-sm font-medium mb-1">Price Range</p>
      <Select value={filters.priceRange} onValueChange={(val) => setFilters({ ...filters, priceRange: val })}>
        <SelectTrigger>
          <SelectValue placeholder="Select price" />
        </SelectTrigger>
        <SelectContent>
          {PRICE_RANGES.map(range => (
            <SelectItem key={range.value} value={range.value}>{range.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}