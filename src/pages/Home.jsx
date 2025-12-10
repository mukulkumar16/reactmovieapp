import React, { useState } from "react";
import Fetchmovies from "../component/Fetchmovies";
import Header from "../component/Header";
import Footer from "../component/Footer";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Action");

  const categories = [
    "Action",
    "Romantic",
    "Comedy",
    "Horror",
    "Sci-Fi",
    "Adventure",
    "Thriller",
    "Animation",
  ];

  return (
    <>
     

      {/* Main Container */}
      <div className="px-4 md:px-10 py-10 space-y-16 bg-[#0f0f0f] min-h-screen text-white">

        {/* Category Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4 md:mb-6">
            Browse by Category
          </h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  px-5 py-2 rounded-full font-medium text-sm transition
                  border border-gray-700 
                  ${
                    selectedCategory === cat
                      ? "bg-red-600 text-white border-red-600 shadow-md"
                      : "bg-gray-900 text-gray-300 hover:bg-gray-700"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Category Movies Row */}
          <div className="mt-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {selectedCategory} Movies
            </h2>
            <Fetchmovies movie={selectedCategory} />
          </div>
        </section>

        {/* Additional Cinematic Sections */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Iron Man</h2>
          <Fetchmovies movie="Iron Man" />
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Hindi Movies</h2>
          <Fetchmovies movie="Hindi" />
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Batman</h2>
          <Fetchmovies movie="Batman" />
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Harry Potter</h2>
          <Fetchmovies movie="Harry Potter" />
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Spider-Man</h2>
          <Fetchmovies movie="Spider man" />
        </section>
      </div>

      {/* Footer (optional) */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;
