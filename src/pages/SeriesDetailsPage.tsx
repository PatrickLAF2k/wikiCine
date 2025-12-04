import { useParams } from "react-router-dom";
import { useShowDetails } from "../hooks/useShowDetails";
import { useEpisodes } from "../hooks/useEpisodes";
import EpisodesCard from "../components/EpisodesCards"
import { Spinner } from "@/components/ui/spinner"
import { Badge } from "@/components/ui/badge"
import type { Episode } from "@/types";



export default function DeriesDetailsPage() {
    const { id } = useParams();
    const showId = Number(id);
    const { show, loading: loadingShow } = useShowDetails(showId);
    const { episodes, loading: loadingEpisodes } = useEpisodes(showId);

    if (loadingShow || loadingEpisodes || !show) return <Spinner />;

    const episodesBySeason = episodes.reduce((acc: any, ep: any) => {
        if (!acc[ep.season]) acc[ep.season] = [];
        acc[ep.season].push(ep);
        return acc;
    }, {});


    return (
        <>
            <main className="flex flex-col container mx-auto items-center px-5 py-2 md:flex-row ">

                <figure className="grid md:grid-cols-[300px_1fr] gap-8 mb-2">
                    {show.image ? (<img src={show.image.original} alt={show.name} className="w-full rounded-lg shadow-lg" />)
                        : (<p>Sem imagem disponível</p>)}
                </figure>

                <div className=" flex flex-col gap-3" >

                    <h2 className="text-3xl font-bold">{show.name}</h2>

                    <div className="flex gap-4 justify-evenly  md:justify-start ">
                        {show.genres.map((genre, index) => (<Badge key={index} > {genre} </Badge>))}
                    </div>

                    <h3>
                        <span className="text-xl font-semibold">Novos episódios:</span> {show.schedule.days} às {show.schedule.time}.
                    </h3>

                    <div className="">
                        <h3 className="text-xl font-semibold mb-4" >Sinopse</h3>
                        <p dangerouslySetInnerHTML={{ __html: show.summary }} className="text-justify " ></p>
                    </div>

                </div>
            </main>

            <section className="container mx-auto items-center px-5 py-2 ">

                <h2 className="text-2xl font-bold mb-3">Episódios</h2>

                {Object.keys(episodesBySeason).map(season => (

                    <div key={season} className="mb-8">

                        <h3 className="text-xl font-semibold mb-4">Temporada {season}</h3>

                        <div className="grid   sm:grid-cols-3 md:grid-cols-5 gap-5 ">
                            {episodesBySeason[season].map((ep: Episode) => (
                                <EpisodesCard key={ep.id} ep={ep} showId={showId} />
                            ))}
                        </div>
                    </div>
                ))}
            </section>

        </>

    );
}
