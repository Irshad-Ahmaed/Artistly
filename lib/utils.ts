import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type Artist = {
  name: string
  category: string
  location: string
  price: number
}

type Filters = {
  category: string[]
  location: string
  priceRange: string
}

export const filterArtists = (artists: Artist[], filters: Filters) => {
  return artists.filter((artist) => {
    const matchCategory =
      filters.category.length === 0 ||
      filters.category.includes(artist.category);

    const matchLocation =
      !filters.location || artist.location === filters.location;

    const matchPrice = (() => {
      if (!filters.priceRange) return true;
      const [min, max] = filters.priceRange.split("-").map(Number);
      return max
        ? artist.price >= min && artist.price <= max
        : artist.price >= min;
    })();

    return matchCategory && matchLocation && matchPrice;
  });
}

export function cn(...inputs: (string | false | null | undefined)[]) {
  return twMerge(clsx(...inputs))
}
