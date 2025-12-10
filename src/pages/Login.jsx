import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/AuthSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (user) {
      alert("Login successful!");
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f0f0f] px-4">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 text-white shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
          Movie<span className="text-white">App</span>
        </h2>

        <label className="block mb-1 text-gray-400 text-sm">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 outline-none text-white placeholder-gray-400 transition"
        />

        <label className="block mb-1 text-gray-400 text-sm">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 mb-6 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 outline-none text-white placeholder-gray-400 transition"
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-semibold text-lg mb-3"
        >
          Login
        </button>

        <button
          type="button"
          onClick={() => navigate("/register")}
          className="w-full bg-gray-700 hover:bg-gray-600 transition py-3 rounded-lg font-semibold text-lg"
        >
          Create New Account
        </button>
      </form>
    </div>
  );
}

export default Login;
