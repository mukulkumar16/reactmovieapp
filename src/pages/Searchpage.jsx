import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Moviecard from "../component/Moviecard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchPage() {
  const query = useQuery().get("q");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=985d4a31&s=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setMovies(data.Search || []);
    };

    fetchMovies();
  }, [query]);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4 md:p-8">
      <h2 className="text-3xl font-bold mb-6 text-red-500">
        Search Results for "<span className="text-white">{query}</span>"
      </h2>

      {movies.length === 0 ? (
        <p className="text-gray-400 text-lg">No movies found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <Moviecard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
