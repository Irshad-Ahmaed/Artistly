"use client"

export const MultiSelectDropdown =({
  label,
  options,
  value = [],
  onChange,
}: {
  label: string
  options: string[]
  value: string[]
  onChange: (value: string[]) => void
}) => {
  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter(o => o !== option))
    } else {
      onChange([...value, option])
    }
  }

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">{label}</p>
      <div className="grid grid-cols-2 gap-2">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={value.includes(opt)}
              onChange={() => toggleOption(opt)}
              className="accent-primary"
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  )
}