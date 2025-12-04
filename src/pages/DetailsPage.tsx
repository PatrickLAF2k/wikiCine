import { useParams } from "react-router-dom";
import { useShowDetails } from "../hooks/useShowDetails";
import { useEpisodes } from "../hooks/useEpisodes";
import EpsodesCard from "../components/EpisodesCards"
import { Spinner } from "@/components/ui/spinner"
import { Badge } from "@/components/ui/badge"
import type { Episode } from "@/types";



export default function DetailsPage() {
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
            <main className="flex flex-col container mx-auto items-center p-5">

                <div className="grid md:grid-cols-[300px_1fr] gap-8 mb-2">
                    {show.image ? (
                        <img
                            src={show.image.original}
                            alt={show.name}
                            className="w-full rounded-lg shadow-lg"
                        />
                    ) : (
                        <p>Sem imagem disponível</p>
                    )}
                </div>

                <div className=" flex flex-col gap-3" >
                    <h2 className="text-lg font-bold">{show.name}</h2>

                    <div className="flex gap-4">
                        {show.genres.map((genre, index) => (

                            <Badge key={index} >
                                {genre}
                            </Badge>

                        ))}
                    </div>

                    <p>
                        <span className="text-lg">Novos episódios:</span> {show.schedule.days.join(", ")} as {show.schedule.time}
                    </p>

                    <div className="">
                        <p>resumo da série</p>
                        <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
                    </div>

                </div>
            </main>

            <section className="container mx-auto">
                <h2 className="text-2xl font-bold">Episódios</h2>

                {Object.keys(episodesBySeason).map(season => (
                    <div key={season} className="mb-8">

                        <h3 className="text-xl font-semibold mb-4">
                            Temporada {season}
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                            {episodes.map((ep: Episode) => (
                                <EpsodesCard key={ep.id} ep={ep} />
                            ))}
                        </div>
                    </div>
                ))}
            </section>

        </>

    );
}
