import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white py-8  border-t border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Logo / Brand */}
        <div className="text-2xl font-extrabold text-red-500">
          Movie<span className="text-white">App</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300 text-sm">
          <a href="/about" className="hover:text-red-500 transition-colors duration-300">About</a>
          <a href="/contact" className="hover:text-red-500 transition-colors duration-300">Contact</a>
          <a href="/privacy" className="hover:text-red-500 transition-colors duration-300">Privacy Policy</a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} MovieApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
