"use client"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type FileUploadProps = {
  onChange: (val: File | null) => void
  value?: File | null // <-- optional, and required for react-hook-form integration
}

export const FileUpload = ({ onChange, value }: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    if (file) {
      setPreview(URL.createObjectURL(file))
      onChange(file)
    }
  }

  useEffect(() => {
    if (!value) {
      setPreview(null)
      return
    }

    const objectUrl = URL.createObjectURL(value)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl) // cleanup
  }, [value])

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
      {preview && (
        <div className="relative h-24 w-24">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="rounded-md object-cover"
          />
        </div>
      )}
    </div>
  )
}