"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LOCATIONS } from "@/lib/constants"
import { useFilterContext } from "@/context/FilterContext"

export const LocationFilter = ()=> {
  const { filters, setFilters } = useFilterContext()

  return (
    <div className="w-40">
      <p className="text-sm font-medium mb-1">Location</p>
      <Select value={filters.location} onValueChange={(value) => setFilters({ ...filters, location: value })}>
        <SelectTrigger>
          <SelectValue placeholder="Select location" />
        </SelectTrigger>
        <SelectContent>
          {LOCATIONS.map(loc => (
            <SelectItem key={loc} value={loc}>{loc}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}