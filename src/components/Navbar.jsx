import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Switcher1 from "./Switcher1"; // Your toggle button component

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    // Change the language here based on isChecked value
    changeLanguage(isChecked ? 'en' : 'kn');
  };

  // This function changes the language using Google Translate
  const changeLanguage = (lang) => {
    const googleTranslateElement = window.google.translate.TranslateElement;
    if (googleTranslateElement) {
      googleTranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,kn', // Include any languages you want
        layout: googleTranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      });
      // Trigger the language change
      const selectLanguage = document.querySelector('.goog-te-combo');
      if (selectLanguage) {
        selectLanguage.value = lang; // Set the selected language
        selectLanguage.dispatchEvent(new Event('change')); // Trigger the change event
      }
    }
  };

  useEffect(() => {
    // Dynamically load Google Translate script
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Google Translate once the script is loaded
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <nav className="relative bg-white border-b text-gray-700">
      <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex font-bold text-3xl text-[#FF8E02] hover:no-underline cursor-pointer"
          >
            <img
              className="h-10 pb-2 inline-flex mr-3"
              src={logo}
              alt="Jaathre Logo"
            />
            Jaathre
          </Link>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="toggle menu"
            >
              {isOpen ? (
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

        <div className="absolute inset-x-0 z-20 w-full px-6 md:relative md:flex md:items-center md:justify-between transition-all duration-300 ease-in-out">
          <ul className="flex flex-col h-full px-2 -mx-4 md:flex-row md:mx-10 md:py-0 my-auto">
            <li>
              <Link to="/" className="px-2.5 py-2 text-black">Home</Link>
            </li>
            <li>
              <Link to="/events" className="px-2.5 py-2 text-black">Events</Link>
            </li>
            <li>
              <Link to="/about" className="px-2.5 py-2 text-black">About</Link>
            </li>
            <li>
              <Link to="/contact" className="px-2.5 py-2 text-black">Contact</Link>
            </li>
            <li>
              <Link to="/login" className="px-2.5 py-2 text-black">Login</Link>
            </li>
          </ul>

          {/* Google Translate dropdown */}
          <div id="google_translate_element" style={{ display: "none" }}></div>

          {/* Toggle Language */}
          <div className="ml-4">
            <Switcher1 onChange={handleCheckboxChange} isChecked={isChecked} />
          </div>

          <div className="relative md:mt-0">
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
