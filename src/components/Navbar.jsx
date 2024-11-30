import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full shadow-sm py-5">
      <div className="container mx-auto md:px-10 px-6 tracking-normal">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <a href="/" className="ml-2 text-3xl font-bold text-red">
              Siti Komalasari
            </a>
          </div>

          {/* Navigation desktop */}
          <div className="hidden text-lg list-none font-semibold lg:flex lg:items-center lg:space-x-10 tracking-wide">
            <li className="hover:text-red">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red">
              <Link to="/About">About</Link>
            </li>
            <li className="hover:text-red">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-red">
              <Link to="/design">Design</Link>
            </li>
            <li className="hover:text-red">
              <Link to="/blog">Blog</Link>
            </li>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-800 font-bold"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-2xl">&#9776;</span>
          </button>
        </nav>

        <div className={`${menuOpen ? "block" : "hidden"} lg:hidden`}>
          <li className="block pb-2 pt-6 font-semibold text-gray-800 hover:text-red">
            <Link to="/">Home</Link>
          </li>
          <li className="block py-2 font-semibold text-gray-800 hover:text-red">
            <Link to="/About">About</Link>
          </li>
          <li className="block py-2 font-semibold text-gray-800 hover:text-red">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="block py-2 font-semibold text-gray-800 hover:text-red">
            <Link to="/design">Design</Link>
          </li>
          <li className="block py-2 font-semibold text-gray-800 hover:text-red">
            <Link to="/blog">Blog</Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
