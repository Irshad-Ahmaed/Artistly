"use client"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export const FileUpload = ({ onChange, value }: { onChange: (val: File | null) => void, value: File | null }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    if (file) {
      setPreview(URL.createObjectURL(file))
      onChange(file)
    }
  }

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">Upload Profile Image</p>
      {/* input field is hidden when we click on Button then its going to work */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={inputRef}
        className="hidden"
      />
      <Button type="button" variant="outline" onClick={() => inputRef.current?.click()}>
        Choose File
      </Button>

      {/* It's shows preview of image which we uploaded */}
      {preview && <img src={preview} alt="Preview" className="mt-2 h-24 rounded-md object-cover" />}
    </div>
  )
}