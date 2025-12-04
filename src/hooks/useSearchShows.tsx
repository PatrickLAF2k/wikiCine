import { useState, useEffect } from "react";
import { searchShowsByName } from "../services/showService";
import type { Program } from "../types/Program";

export function useSearchShows(searchTerm: string) {
    const [results, setResults] = useState<Program[]>([]);
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
