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
    setMobileMenu(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
    navigate("/login");
  };

  return (
    <header className="bg-[#0f0f0f] text-white p-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">

      {/* Logo */}
      <Link to="/" className="text-2xl font-extrabold text-red-500">
        Movie<span className="text-white">App</span>
      </Link>

      {/* Desktop Search */}
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
        <button>🔍</button>
      </form>

      {/* Right Menu */}
      <div className="flex items-center gap-4">

        {/* Mobile Search Button */}
        <button
          className="md:hidden bg-gray-800 p-2 rounded-full"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          🔍
        </button>

        {/* Profile Button */}
        <div className="relative">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700"
          >
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              {user ? user.email[0].toUpperCase() : "?"}
            </div>
            <span className="hidden sm:inline">{user ? user.email : "Guest"}</span>
          </button>

          {/* Invisible overlay for closing dropdown */}
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40"
            ></div>
          )}

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-3 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2 z-50">

              {!user ? (
                <>
                  <button
                    onClick={() => {
                      navigate("/login");
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    Login
                  </button>

                  <button
                    onClick={() => {
                      navigate("/register");
                      setOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-700"
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate("/favorite");
                      setOpen(false);
                    }}
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

      {/* Mobile Search Box */}
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full bg-gray-900 p-4 md:hidden z-40">
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
