"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"
import { ModeToggle } from "./Light-Dark-Mode"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-white sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold dark:text-black">
        Artistly
      </Link>

      <nav className="hidden md:flex gap-4">
        <Link href="/artists">
          <Button variant="ghost" className="dark:bg-black dark:text-white">Browse Artists</Button>
        </Link>
        <Link href="/onboard">
          <Button>Onboard Artist</Button>
        </Link>
        <Link href="/manager">
          <Button variant={'outline'} className="dark:bg-black dark:text-white">Manage Artist</Button>
        </Link>
        
        <ModeToggle/>
      </nav>

      <div className="md:hidden flex items-center gap-2">
        <ModeToggle/>
        <button onClick={() => setMenuOpen(!menuOpen)} className="dark:text-black">
          {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute dark:bg-black dark:text-white top-16 right-6 bg-white shadow-lg rounded-md border p-4 w-48 flex flex-col space-y-2 md:hidden">
          <Link href="/artists" onClick={() => setMenuOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">Browse Artists</Button>
          </Link>
          <Link href="/onboard" onClick={() => setMenuOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">Onboard Artist</Button>
          </Link>
          <Link href="/manager" onClick={() => setMenuOpen(false)}>
            <Button variant="ghost" className="w-full justify-start">Manage Artist</Button>
          </Link>
        </div>
      )}
    </header>
  )
}