// components/ShowSearch.tsx
import { useState } from "react";
import { useSearchShows } from "../hooks/useSearchShows";
import type { } from "../types/Program";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Icon } from "@iconify/react";
import SeriesCard from "@/components/SeriesCard";
import { Spinner } from "@/components/ui/spinner"


export default function SeriesSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const { results: searchResults, loading } = useSearchShows(searchTerm);

  const displayedShows: Program[] = searchTerm ? searchResults : [];

  return (
    <section className="mb-6 container mx-auto p-5">

      <h2 className="text-xl font-semibold mb-1">Descubra programas de TV</h2>
      <p className="mb-4 text-sm text-gray-700"> Navegue por milhares de séries de TV e encontre sua próxima maratona! </p>

      <div className="grid w-full max-w-sm gap-6 mb-6">
        <InputGroup>
          <Icon icon="ic:baseline-search" fontSize="1.5rem" />
          <InputGroupInput
            placeholder="Procurar programas de TV..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </div>

      {searchTerm && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-9">
          {loading ? (
            <Spinner />
          ) : displayedShows.length > 0 ? (
            displayedShows.map((show) => (
              <SeriesCard key={show.id} show={show} />
            ))
          ) : (
            <p className="col-span-full text-center">Nenhum resultado encontrado</p>
          )}
        </div>
      )}
    </section>
  );
}
