"use client"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CATEGORIES_WITH_IMAGES } from "@/lib/data/categories"

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Artistly</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          A one-stop platform for event planners and artist managers to connect, collaborate,
          and create memorable experiences. Discover performers from every category.
        </p>
        <Link href="/artists">
          <Button size="lg">Explore Artists</Button>
        </Link>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {CATEGORIES_WITH_IMAGES.map((cat, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-40 w-full">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold text-lg">{cat.title}</h3>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}

export default HomePage;