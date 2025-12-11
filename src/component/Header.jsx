import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/AuthSlice";
import { FavoritesContext } from "./FavContext";
import { Search } from "lucide-react";

function Header() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { favorites } = useContext(FavoritesContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate("/Searchpage?q=" + query);
    setMobileMenu(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
    navigate("/login");
  };

  return (
    <header className="bg-[#0f0f0f] text-white p-4 shadow-lg sticky top-0 z-50">

      
      <div className="max-w-6xl mx-auto flex items-center justify-between ">

      
        <Link to="/" className="text-3xl font-extrabold text-red-500">
          Movie<span className="text-white">App</span>
        </Link>

        
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-gray-800 rounded-full px-4 w-[40%]"
        >
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none p-2 text-sm"
          />
          <button><Search /></button>
        </form>

      
        <div className="flex items-center gap-5">

         
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden bg-gray-800 p-2  rounded-full text-lg"
          >
            🔍
          </button>

          
          <button
            onClick={() => {
              navigate("/favorite");
              setOpen(false);
            }}
            className="relative text-2xl "
          >
            ❤️
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-xs">
                {favorites.length}
              </span>
            )}
          </button>

          
          <div className="relative -ml-2">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700"
            >
              <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                {user ? user.email[0].toUpperCase() : "?"}
              </div>
              <span className="hidden sm:inline">
                {user ? user.email : "Guest"}
              </span>
            </button>

            {open && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setOpen(false)}
                ></div>

                <div className="absolute right-0 mt-3 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2 z-50">
                  {user && (
                    <button
                      onClick={handleLogout}
                      className="w-full rounded-lg text-left px-4 py-2 hover:bg-red-600"
                    >
                      Logout
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      
      {mobileMenu && (
        <div className="md:hidden bg-gray-900 p-4 mt-3 rounded-lg">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 p-2 rounded-full outline-none bg-gray-800"
            />
            <button className="bg-red-600 px-4 py-2 rounded-full">
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  );
}

export default Header;
