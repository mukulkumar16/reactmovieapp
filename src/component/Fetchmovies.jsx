import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";

function Fetchmovies({ movie }) {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=985d4a31&s=${movie}`
      );
      const data = await res.json();
      setMovies(data.Search || []);
    }

    fetchMovies();
  }, [movie]); 

  return (
     
    <>
    {/* <h1 className="text-bold pb-6 text-lg">{movie}</h1> */}
    <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
      {Movies.map((m) => (
        <Moviecard key={m.imdbID} movie={m} />
      ))}
    </div>
    </>
  );
}

export default Fetchmovies;
