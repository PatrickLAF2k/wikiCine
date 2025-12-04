import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowById } from "../services/showService";

export function useShowDetails() {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(show);

    useEffect(() => {
        async function load() {
            setLoading(true);

            const data = await getShowById(Number(id));
            setShow(data);
            setLoading(false);
        }

        load();
    }, [id]);

    return { show, loading };
}
