"use client";
import { useEffect, useState } from "react";
import { ArtistCard } from "@/components/cards/ArtistCard";
import { FilterBar } from "@/components/filters/FilterBar";
import { useFilterContext } from "@/context/FilterContext";
import { filterArtists } from "@/lib/utils";
import Loading from "../loading";
import type { Artist } from "@/types";
import { artistsData } from "@/mock/artists";

const ArtistsPage = () => {
  const { filters } = useFilterContext();
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const result = filterArtists(artistsData, filters);
      setArtists(result);
      setLoading(false);
    }, 300); // Simulate API delay
  }, [filters]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Browse Artists</h1>
      <FilterBar />
      {loading ? (
        <Loading />
      ) : artists.length === 0 ? (
        <p className="text-center text-muted-foreground mt-10">
          No matching artists found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtistsPage;