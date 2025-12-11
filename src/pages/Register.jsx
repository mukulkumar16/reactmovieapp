import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../store/AuthSlice";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    
  window.scrollTo({ top: 0, behavior: "smooth" });    }, []);
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ email, password }));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#0f0f0f] px-4">
      <form
        onSubmit={handleRegister}
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
          Register
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full bg-gray-700 hover:bg-gray-600 transition py-3 rounded-lg font-semibold text-lg"
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}

export default Register;
