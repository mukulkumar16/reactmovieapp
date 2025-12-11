import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/AuthSlice";

function Header() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate("/Searchpage?q=" + query);
  };

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
    navigate("/login");
  };

  return (
    <header className="bg-[#0f0f0f] text-white p-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">

     
      <Link to="/">
        <div className="text-2xl font-extrabold tracking-wide text-red-500">
          Movie<span className="text-white">App</span>
        </div>
      </Link>

      
      <form
        onSubmit={handleSearch}
        className="hidden md:flex items-center bg-gray-800 rounded-full px-4 w-1/3"
      >
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent outline-none p-2 text-sm"
        />
        <button className="text-gray-300 hover:text-white">🔍</button>
      </form>

      
      <div className="flex items-center gap-4">

        
        <button
          className="md:hidden bg-gray-800 p-2 rounded-full hover:bg-gray-700"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          🔍
        </button>

        
        <div
          tabIndex={0}
          onBlur={() => setOpen(false)}   
          className="relative outline-none"
        >
          <button
            onClick={() => setOpen(!open)}
            className="profile-button flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition"
          >
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-sm">
              {user ? user.email[0].toUpperCase() : "?"}
            </div>
            <span className="hidden sm:inline">{user ? user.email : "Guest"}</span>
          </button>

          {open && (
            <div className="dropdown-menu absolute right-0 mt-3 w-48 bg-gray-900 text-white rounded-lg shadow-xl border border-gray-700 py-2">
              
              {!user && (
                <>
                  <button
                    onClick={() => { navigate("/login"); setOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    Login
                  </button>

                  <button
                    onClick={() => { navigate("/register"); setOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    Register
                  </button>
                </>
              )}

              {user && (
                <>
                  <button
                    onClick={() => { navigate("/favorite"); setOpen(false); }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    ⭐ Favorites
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              )}

            </div>
          )}
        </div>
      </div>

      
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full bg-gray-900 p-4 md:hidden z-40 animate-fade-in">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 p-2 rounded-full outline-none bg-gray-800 text-white"
            />
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full">
              Search
            </button>
          </form>
        </div>
      )}
    </header>
  );
}

export default Header;
