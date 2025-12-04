import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Show } from "@/types";

interface FavoritesState {
    favorites: Show[];
    addFavorite: (show: Show) => void;
    removeFavorite: (id: number) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
    persist(
        (set, get) => ({
            favorites: [],

            addFavorite: (show) => {
                const exists = get().favorites.some((s) => s.id === show.id);
                if (!exists) {
                    set((state) => ({
                        favorites: [...state.favorites, show],
                    }));
                }
            },

            removeFavorite: (id) =>
                set((state) => ({
                    favorites: state.favorites.filter((s) => s.id !== id),
                })),
        }),
        {
            name: "favorites-storage", // nome da chave no localStorage
            storage: createJSONStorage(() => localStorage),
        }
    )
);
