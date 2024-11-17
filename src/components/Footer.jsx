// src/components/Footer.js
import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="flex justify-center px-4 text-gray-800 bg-white border-t">
      <div class="container px-6 py-6">
        <h1 class="text-lg font-bold text-center lg:text-2xl text-black">
          Join 31,000+ others and never miss <br /> out on new tips, tutorials,
          and more.
        </h1>

        <div class="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <input
            id="email"
            type="text"
            class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300 max-w-md"
            placeholder="Email Address"
          />

          <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            Subscribe
          </button>
        </div>

        <hr class="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

        <div class="flex flex-col items-center justify-between md:flex-row">
          <a
            href="#"
            className="text-3xl font-bold text-[#FF8E02] hover:no-underline"
          >
            <img class="w-auto h-10 mb-1 inline-flex" src={logo} alt="" />{" "}
            Jaathre
          </a>

          <div class="flex space-x-4 my-4 md:my-0">
            <a
              href="#"
              class="text-black dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {/* <!-- Instagram SVG icon here --> */}
              </svg>
            </a>
            <a
              href="#"
              class="text-black dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {/* <!-- LinkedIn SVG icon here --> */}
              </svg>
            </a>
            <a
              href="#"
              class="text-black dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {/* <!-- Facebook SVG icon here --> */}
              </svg>
            </a>
            <a
              href="#"
              class="text-black dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {/* <!-- Twitter SVG icon here --> */}
              </svg>
            </a>
          </div>

          <div class="flex mt-0 md:m-0">
            <div class="-mx-4">
              <a
                href="#"
                class="px-4 text-sm text-black transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                About
              </a>
              <a
                href="#"
                class="px-4 text-sm text-black transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                Blog
              </a>
              <a
                href="#"
                class="px-4 text-sm text-black transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                News
              </a>
              <a
                href="#"
                class="px-4 text-sm text-black transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
