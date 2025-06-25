"use client";
import { useEffect, useState } from "react";
import artistsData from "@/mock/artists.json";
import { ArtistCard } from "@/components/cards/ArtistCard";
import { FilterBar } from "@/components/filters/FilterBar";
import { useFilterContext } from "@/context/FilterContext";
import { filterArtists } from "@/lib/utils";
import Loading from "../loading";

const ArtistsPage = () => {
  const { filters } = useFilterContext();
  const [artists, setArtists] = useState<any[]>([]);

  useEffect(() => {
    // simulate API fetch
    setTimeout(() => setArtists(filterArtists(artistsData, filters)), 300);
  }, [filters]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Browse Artists</h1>
      <FilterBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.length === 0 ? (
          <Loading />
        ) : (
          artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))
        )}
      </div>
    </div>
  );
};

export default ArtistsPage;
