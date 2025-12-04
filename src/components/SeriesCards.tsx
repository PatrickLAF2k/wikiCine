import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge"
import type { Show } from "@/types";

interface SeriesCardProps {
    show: Show;
}

export default function SeriesCard({ show }: SeriesCardProps) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/series/${show.id}`);

    }

    return (
        <div className="relative p-3 border rounded-lg shadow-md  transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            onClick={handleClick}>

            {show.image?.medium != null ? (
                <img
                    src={show.image.medium}
                    alt={show.name}
                    className="w-full rounded-lg"
                />
            ) : (
                <Icon icon="material-symbols-light:hide-image-outline" className="w-full rounded-lg border-2 h-86" />
            )}

            <Badge className=" flex items-center  absolute bottom-1/5  left-5 md:bottom-1/8 ">

                <Icon icon="material-symbols:star-shine-outline-rounded" color="blue" />

                <p> {show.rating.average != null ? show.rating.average.toFixed(1) : "Não avaliado"} </p>
            </Badge>

            <p className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis py-1">{show.name}</p>

        </div>
    );
}

