import { useEffect, useState } from "react";
import { getAllShows } from "../services/showService";

export function useShows(page: number) {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {

      setLoading(true);
      const data = await getAllShows(page);

      setShows(data);
      setLoading(false);
    }
    load();
  }, [page]);

  return { shows, loading };
}
