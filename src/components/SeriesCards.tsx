import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import type { Show } from "@/types";
import { useFavoritesStore } from "../stores/favorites";

interface SeriesCardProps {
    show: Show;
}

export default function SeriesCards({ show }: SeriesCardProps) {
    const navigate = useNavigate();
    const { favorites, addFavorite, removeFavorite } = useFavoritesStore();

    const isFavorited = favorites.some(f => f.id === show.id);

    function handleClick() {
        navigate(`/series/${show.id}`);
    }

    function handleFavoriteClick(e: React.MouseEvent) {
        e.stopPropagation();
        if (isFavorited) {
            removeFavorite(show.id);
        } else {
            addFavorite(show);
        }
    }

    return (
        <div
            className="relative p-3 border rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            onClick={handleClick}
        >
            {show.image?.medium ? (
                <img src={show.image.medium} alt={show.name} className="w-full rounded-lg" />
            ) : (
                <Icon icon="material-symbols-light:hide-image-outline" className="w-full rounded-lg border-2 h-86" />
            )}

            <div className="absolute bottom-1/5 left-5 bg-neutral-100 bg-opacity-70 rounded flex items-center gap-1 px-2 shadow-md md:bottom-1/6">
                <Icon icon="material-symbols:star-shine-outline-rounded" color="blue" />
                <p>{show.rating.average != null ? show.rating.average.toFixed(1) : "--"}</p>
            </div>

            <div className="absolute left-3/4 top-1/12 md:top-1/20 md:left-5/6 text-xl cursor-pointer transition-all duration-300  hover:scale-125 " onClick={handleFavoriteClick} >
                <div className=" bg-neutral-100 bg-opacity-70 rounded p-1 ">
                    <Icon icon="tabler:hearts" color={isFavorited ? "red" : "gray"} />
                </div>
            </div>

            <p className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis py-1">
                {show.name}
            </p>
        </div>
    );
}
