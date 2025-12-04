import {
    PaginationContent,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Spinner } from "@/components/ui/spinner"
import type { Show } from "@/types";


import SeriesCard from "@/components/SeriesCards";
import { useShows } from "../hooks/useShows";
import { useState } from "react";
import ShowSearch from "@/components/SeriesSearch";

export default function HomePage() {
    const [page, setPage] = useState(0);
    const { shows, loading } = useShows(page);


    return (
        <>
            <ShowSearch />

            <main >
                <div className="flex  justify-between container mx-auto p-5">

                    <h2 className="text-lg font-bold ">
                        Todos os programas
                    </h2>

                    <PaginationContent className="w-1/2 justify-end">
                        <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); if (page > 0) setPage(page - 1); }} />

                        <p>{page}</p>

                        <PaginationNext href="#" onClick={(e) => { e.preventDefault(); setPage(page + 1); }} />
                    </PaginationContent>

                </div>


                {loading && <Spinner />}

                {!loading && (
                    <div className=" container mx-auto py-5 px-3  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5" >

                        {shows.map((show: Show) => (
                            <SeriesCard key={show.id} show={show} />
                        ))}
                    </div>
                )
                }
            </main >
        </>
    );
}
