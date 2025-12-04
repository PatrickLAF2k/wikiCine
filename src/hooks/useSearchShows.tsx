import { useState, useEffect } from "react";
import { searchShowsByName } from "../services/showService";
import type { Show } from "@/types";


export function useSearchShows(searchTerm: string) {
    const [results, setResults] = useState<Show[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchTerm) {
            setResults([]);
            return;
        }

        setLoading(true);
        searchShowsByName(searchTerm)
            .then(shows => setResults(shows))
            .finally(() => setLoading(false));
    }, [searchTerm]);

    return { results, loading };
}
