import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const filterArtists = (artists: any[], filters: any) => {
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

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
