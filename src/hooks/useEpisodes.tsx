import { useEffect, useState } from "react";
import { getEpisodesByShowId } from "../services/showService";

export function useEpisodes(showId: number) {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(episodes);


    useEffect(() => {
        async function load() {
            try {
                setLoading(true);

                const data = await getEpisodesByShowId(showId);

                setEpisodes(data);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [showId]);

    return { episodes, loading };
}
