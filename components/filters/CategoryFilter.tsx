"use client"
import { useState } from "react"
import { useFilterContext } from "@/context/FilterContext"
import { CATEGORIES } from "@/lib/constants"
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export const CategoryFilter =()=> {
  const { filters, setFilters } = useFilterContext()
  const [open, setOpen] = useState(false)

  const toggleCategory = (cat: string) => {
    const newCategories = filters.category.includes(cat)
      ? filters.category.filter(c => c !== cat)
      : [...filters.category, cat]
    setFilters({ ...filters, category: newCategories })
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Category</Button>
      </PopoverTrigger>
      <PopoverContent className="w-48">
        <div className="space-y-2">
          {CATEGORIES.map(cat => (
            <label key={cat} className="flex items-center gap-2">
              <Checkbox
                checked={filters.category.includes(cat)}
                onCheckedChange={() => toggleCategory(cat)}
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}