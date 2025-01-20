import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed w-full z-50 bg-white/[0.95] lg:bg-transparent">
        <div className="container mx-auto md:px-10 px-6">
          <nav className="flex items-center justify-between lg:py-6 py-2">
            {/* Logo */}
            <div className="w-10 lg:w-12">
              <a href="/">
                <img src={Logo} alt="" className="w-full" />
              </a>
            </div>

            {/* Navigation desktop */}
            <div className="hidden list-none font-semibold lg:flex lg:items-center space-1 tracking-wide bg-white/[0.90] py-2 px-4 rounded-md">
              <li className="px-4 py-1 hover:shadow-md hover:bg-slate-50 hover:rounded-md ">
                <Link to="/">Home</Link>
              </li>
              <li className="px-4 py-1 hover:shadow-md hover:bg-slate-50 hover:rounded-md">
                <Link to="/about"> About</Link>
              </li>
              <li className="px-2 py-1 hover:shadow-md hover:bg-slate-50 hover:rounded-md">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="px-4 py-1 hover:shadow-md hover:bg-slate-50 hover:rounded-md">
                <Link to="/frames">Frames</Link>
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

          <div className={`${menuOpen ? "block" : "hidden"} lg:hidden `}>
            <li className="block pb-2 pt-6 font-semibold text-gray-800 hover:font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="block py-2 font-semibold text-gray-800 hover:font-bold">
              <Link to="/about">About</Link>
            </li>
            <li className="block py-2 font-semibold text-gray-800 hover:font-bold">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="block pt-2 pb-6 font-semibold text-gray-800 hover:font-bold">
              <Link to="/frames">Frames</Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
