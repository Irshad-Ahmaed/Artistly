"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const ArtistCard = ({ artist }: { artist: any }) => {
  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <div className="relative w-full h-48">
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <h3 className="text-lg font-semibold">{artist.name}</h3>
        <p className="text-muted-foreground text-sm">{artist.category} | {artist.location}</p>
        <p className="text-sm font-medium">Starts at ₹{artist.price.toLocaleString()}</p>
        <Button size="sm" className="w-full mt-2">Ask for Quote</Button>
      </CardContent>
    </Card>
  )
}