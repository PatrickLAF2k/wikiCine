import { useEffect, useState } from "react";
import { getShowById } from "../services/showService";
import type { Show } from "@/types"; // ajuste o caminho conforme seu projeto

export function useShowDetails(showId: number) {
    const [show, setShow] = useState<Show | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            setLoading(true);

            const data = await getShowById(showId);
            setShow(data);

            setLoading(false);
        }

        load();
    }, [showId]);

    return { show, loading };
}
