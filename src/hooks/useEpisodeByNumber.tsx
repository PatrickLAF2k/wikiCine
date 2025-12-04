import { useEffect, useState } from "react";
import { getEpisodeByNumber } from "../services/showService";

export function useEpisodeByNumber(showId: number, season: number, number: number) {
    const [episode, setEpisode] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function load() {
            try {
                setLoading(true);
                setError(null);
                const data = await getEpisodeByNumber(showId, season, number);
                setEpisode(data);
            } catch (err: any) {
                setError(err.message || "Erro ao buscar episódio");
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [showId, season, number]);

    return { episode, loading, error };
}
