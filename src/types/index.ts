export interface Show {
  id: number;
  name: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string;
  schedule: {
    time: string;
    days: string[];
  };
}

export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  runtime: number;
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string;
}

export interface SearchResult {
  score: number;
  show: Show;
}
