import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../component/FavContext";

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="min-h-screen bg-[#0f0f0f] p-6 text-white">
      <h1 className="text-3xl font-bold mb-8 text-center text-red-500">
        Your Favorite Movies
      </h1>

      {favorites.length === 0 ? (
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-lg">
            No favorites added yet.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition"
          >
            Watch Movies
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <Link to={`/movie/${movie.imdbID}`}>
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
                  alt={movie.Title}
                  className="w-full h-64 object-cover"
                />
              </Link>

              <div className="p-4 flex flex-col items-center text-center">
                <h2 className="text-lg font-semibold mb-1 truncate w-full">{movie.Title}</h2>
                <p className="text-yellow-400 mb-2">⭐ {movie.imdbRating || "N/A"}</p>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    to={`/movie/${movie.imdbID}`}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-sm font-medium transition"
                  >
                    Details
                  </Link>

                  <button
                    onClick={() => removeFavorite(movie.imdbID)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-full text-white text-sm font-medium transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
