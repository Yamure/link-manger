import { useFavorites } from "@/context/FavoritesContext";

const FavoritesBar = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-custom-bg/80 backdrop-blur-sm border-t border-zinc-200/50 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center space-x-4">
          <h3 className="text-xs font-medium text-zinc-900">Favorites</h3>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {favorites.map((favorite) => (
              <a
                key={favorite.id}
                href={favorite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-white/50 hover:bg-white transition-colors border border-zinc-200/50"
              >
                <div
                  className="w-4 h-4 rounded flex items-center justify-center text-[10px] text-white"
                  style={{ backgroundColor: favorite.color }}
                >
                  {favorite.title.charAt(0)}
                </div>
                <span className="text-xs text-zinc-600 font-mono whitespace-nowrap">
                  {favorite.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesBar;
