import { useParams } from "react-router-dom";
import { useEpisodeByNumber } from "../hooks/useEpisodeByNumber";
import { Spinner } from "@/components/ui/spinner";
import { Badge } from "@/components/ui/badge"

export default function EpisodeDetailsPage() {
    const { showId, season, episodeNumber } = useParams();
    const { episode, loading, error } = useEpisodeByNumber(
        Number(showId),
        Number(season),
        Number(episodeNumber)
    );

    if (loading) return <Spinner />;
    if (error) return <p>{error}</p>;
    if (!episode) return <p>Episódio não encontrado.</p>;

    return (
        <main className="container mx-auto px-5 py-4">

            <div className="flex gap-6  mb-3" >
                <Badge>Temporada {episode.season}</Badge>
                <Badge>Episódio {episode.number}</Badge>
            </div>

            <figure className="grid md:grid-cols-[1000px_1fr] gap-8 mb-2 md:">
                {episode.image ? (<img src={episode.image.original} alt={episode.name} className="w-full rounded-lg shadow-lg" />)
                    : (<p>Sem imagem disponível</p>)}
            </figure>

            <h2 className="text-3xl font-bold mb-3">{episode.name}</h2>

            <div className="">
                <h3 className="text-xl font-semibold mb-4">Sinopse</h3>
                {episode.summary ? (
                    <p dangerouslySetInnerHTML={{ __html: episode.summary }} className="text-justify" />
                ) : (
                    <p>Sinopse não disponível.</p>
                )}
            </div>
        </main>
    );
}
