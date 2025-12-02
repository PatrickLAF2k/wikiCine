export interface Program {
    id: number;
    title: string;
    description?: string;
    name: string;
    image?: {
        medium: string;
        original: string;
    } | null;
    genres: string;
    rating: {
        average: string;
    }
}
