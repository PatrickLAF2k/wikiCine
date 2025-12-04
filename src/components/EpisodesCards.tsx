import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import type { Episode } from "@/types";

interface EpisodesCardProps {
    ep: Episode;
    showId: number;
}

export default function EpisodesCards({ ep, showId }: EpisodesCardProps) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/series/${showId}/season/${ep.season}/episode/${ep.number}`);
    }

    return (
        <div className="relative overflow-hidden  p-3 border rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer " onClick={handleClick}>

            {ep.image?.medium ? (
                <img src={ep.image.medium} alt={ep.name} className="rounded-lg w-full " />
            ) : (
                <Icon icon="material-symbols-light:hide-image-outline" className="w-full rounded-lg border-2 h-86" />
            )}

            <div className="absolute bottom-1/4 left-5 bg-neutral-100 bg-opacity-70 rounded flex items-center gap-1 px-2 shadow-md">
                <Icon icon="material-symbols:star-shine-outline-rounded" color="blue" />
                <p>{ep.rating.average != null ? ep.rating.average.toFixed(1) : "Não avaliado"}</p>
            </div>

            <p className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis py-1">
                {ep.number}. {ep.name}
            </p>
        </div>
    );
}
