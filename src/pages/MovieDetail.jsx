import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FavoritesContext } from "../component/FavContext";


function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    async function fetchMovieDetails() {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=985d4a31&i=${id}`
      );
      const data = await res.json();
      setMovie(data);
    }
    fetchMovieDetails();
  }, [id]);

  if (!movie)
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0f0f0f] text-white">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );

  const favoriteStatus = isFavorite(movie.imdbID);

  function toggleFavorite() {
    if (favoriteStatus) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <>
     

      <div className="min-h-screen bg-[#0f0f0f] text-white p-8 flex justify-center">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 bg-[#111] p-8 rounded-xl shadow-xl">

          
          <div className="flex justify-center md:justify-start">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-64 md:w-80 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>

          
          <div className="flex flex-col justify-center space-y-5">

            <h1 className="text-4xl font-extrabold tracking-wide text-red-500">
              {movie.Title}
            </h1>

            <p className="text-gray-300 leading-relaxed">
              {movie.Plot}
            </p>

            <div className="space-y-2 text-gray-400 text-sm md:text-base">
              <p><span className="font-semibold text-white">Released:</span> {movie.Released}</p>
              <p><span className="font-semibold text-white">Genre:</span> {movie.Genre}</p>
              <p><span className="font-semibold text-white">IMDB Rating:</span> ⭐ {movie.imdbRating}</p>
              <p><span className="font-semibold text-white">Actors:</span> {movie.Actors}</p>
              <p><span className="font-semibold text-white">Director:</span> {movie.Director}</p>
            </div>

            
            <button
              onClick={toggleFavorite}
              className={`
                mt-4 px-6 py-3 rounded-full font-semibold shadow-lg transition 
                w-fit
                ${
                  favoriteStatus
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }
              `}
            >
              {favoriteStatus ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
