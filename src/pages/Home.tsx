import type { Program } from "../types/Program";
import { useShows } from "../hooks/useShows";

export default function Home() {

    const { shows, loading } = useShows(0);

    return (
        <main className="">
            <h2 className="text-xl font-semibold mb-4">Programas</h2>

            {loading && <p>Carregando...</p>}

            {!loading && (
                <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {shows.map((show: Program) => (
                        <div key={show.id} className="p-3 border rounded-lg shadow-md bg-white">

                            {show.image?.medium && (<img src={show.image.medium} alt={show.name} className="w-full rounded-md" />)}

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
