// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure the path is correct

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white border-b text-gray-700">
      <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex font-bold text-3xl text-[#FF8E02] hover:no-underline cursor-pointer"
          >
            <img
              className="h-10 pb-2 inline-flex mr-3"
              src={logo}
              alt="Jaathre Logo"
            />{" "}
            Jaathre
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="toggle menu"
            >
              {isOpen ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu Items and Search */}
        <div className="absolute inset-x-0 z-20 w-full px-6 md:relative md:flex md:items-center md:justify-between transition-all duration-300 ease-in-out">
          {/* Navigation Links */}
          <ul className="flex flex-col h-full px-2 -mx-4 md:flex-row md:mx-10 md:py-0 my-auto">
            <li>
              <Link
                to="/"
                className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2 text-black hover:no-underline font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2 text-black hover:no-underline font-medium"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2 text-black hover:no-underline font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2 text-black hover:no-underline font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2 text-black hover:no-underline font-medium"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>

          {/* Search Input */}
          <div className="relative md:mt-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
