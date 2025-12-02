import type { Program } from "../types/Program";
import { useShows } from "../hooks/useShows";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Home() {
    const [page, setPage] = useState(0);
    const { shows, loading } = useShows(page);


    return (
        <main className="">
            <div className="flex justify-between items-center mb-4 w-full px-5 bg-amber-50">
                <h2 className="text-xl font-semibold mb-4">Programas</h2>

                <div className="flex gap-6">
                    <button onClick={() => setPage(page - 1)} ><Icon icon="material-symbols:arrow-circle-left-outline-rounded" width="24" height="24" /></button>
                    <p>Pagina {page} </p>
                    <button onClick={() => setPage(page + 1)} ><Icon icon="material-symbols:arrow-circle-right-outline-rounded" width="24" height="24" /></button>
                </div>
            </div>


            {loading && <p>Carregando...</p>}

            {!loading && (
                <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {shows.map((show: Program) => (
                        <div key={show.id} className="p-3 border rounded-lg shadow-md bg-white">

                            {show.image?.medium && (<img src={show.image.medium} alt={show.name} className="w-full rounded-md" />)}

                            <div>
                                <Icon icon="material-symbols:star-shine-outline-rounded"  width="24" height="24" />
                                <p>{show.rating.average != null ? show.rating.average : "Não avaliado"}</p>
                            </div>

                            <p className="flex  font-semibold mb-2">{show.name}</p>

                            <div className="flex justify-evenly " >
                                <p className="font-semibold mb-2">{show.genres[0]}</p>
                                <p className="font-semibold mb-2">{show.genres[1]}</p>
                            </div>



                        </div>
                    ))}
                </div>

            )}
        </main>
    );
}
