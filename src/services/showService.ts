import { api } from "./api";

export async function getAllShows(page: number) {
    const response = await api.get(`/shows?page=${page}`);
    return response.data;
}
