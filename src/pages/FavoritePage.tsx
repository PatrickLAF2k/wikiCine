import SeriesCards from '../components/SeriesCards';
import { useFavoritesStore } from '../stores/favorites';

export default function FavoritesPage() {
    const favorites = useFavoritesStore((state) => state.favorites);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Meus Favoritos</h1>

            {favorites.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64">
                    <p className="text-muted-foreground text-lg mb-2">
                        Nenhum favorito ainda
                    </p>
                    <p className="text-muted-foreground">
                        Comece adicionando séries à sua lista de favoritos!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {favorites.map((show) => (
                        <SeriesCards key={show.id} show={show} />
                    ))}
                </div>
            )}
        </div>
    );
}
