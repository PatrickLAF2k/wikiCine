import axios from "axios";

const API_BASE_URL = 'https://api.tvmaze.com';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export async function getAllShows(page: number) {
    const response = await api.get(`/shows?page=${page}`);
    return response.data;
}

export async function searchShowsByName(name: string) {
    const response = await api.get(`/search/shows?q=${encodeURIComponent(name)}`);
    return response.data.map((item: any) => item.show);
}

export async function getShowById(id: number) {
    const response = await api.get(`/shows/${id}`);
    return response.data;
}

export async function getEpisodesByShowId(id: number) {
    const response = await api.get(`/shows/${id}/episodes`);
    return response.data;
}

export async function getEpisodeByNumber(showId: number, season: number, number: number) {
    const response = await api.get(
        `/shows/${showId}/episodebynumber`,
        {
            params: { season, number }
        }
    );
    return response.data;
}
