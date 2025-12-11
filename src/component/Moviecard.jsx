import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "./FavContext";
// import { HeartPlus } from "react-iconly";

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite(movie.imdbID)) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="
        bg-[#111] 
        rounded-xl 
        shadow-lg 
        overflow-hidden 
        hover:scale-105 
        hover:shadow-2xl 
        transition-all 
        duration-300 
        cursor-pointer 
        group
      ">
        
       
        <div className="relative">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
            alt={movie.Title}
            className="w-full h-72 object-cover transition duration-300 group-hover:brightness-75"
          />

          
          <button
            onClick={handleFavoriteClick}
            className="
              absolute top-3 right-3 
              bg-black bg-opacity-50 
              backdrop-blur-md 
              p-2 
              rounded-full 
              text-xl 
              transition 
              hover:bg-opacity-70
            "
          >
            {isFavorite(movie.imdbID) ? "❤️" : "🤍 "}
          </button>
        </div>

       
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold text-white truncate">
            {movie.Title}
          </h3>
          <p className="text-gray-400 text-sm">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
