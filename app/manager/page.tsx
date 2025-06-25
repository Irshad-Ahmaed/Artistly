"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Loading from "../loading";
import type { Artist } from "@/types";
import { artistsData } from "@/mock/artists";

const ManagerDashboard = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    // No filter applied here — show full list
    setTimeout(() => setArtists(artistsData), 500); // Simulate API
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Manager Dashboard</h2>

      {artists.length === 0 ? (
        <Loading />
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Fee</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {artists.map((artist, index) => (
                <TableRow key={index}>
                  <TableCell>{artist.name}</TableCell>
                  <TableCell>{artist.category.join(", ")}</TableCell>
                  <TableCell>{artist.location}</TableCell>
                  <TableCell>{artist.fee}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ManagerDashboard;