// AboutUs.js
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHandsHelping,
  FaGlobeAsia,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa"; // Importing icons
import "./AboutUs.css"; // Import any additional custom styles

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen "
        style={{ backgroundImage: "url('../assets/IMG-20241030-WA0011.jpg')" }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div> */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 about-container">
          <div className="w-fit h-72 bg-gray-200 bg-opacity-50 backdrop-blur-sm pb-12 pt-6 px-6 rounded-2xl flex flex-col justify-around mx-auto -mt-16">
            <h1 className="text-6xl font-extrabold text-black mb-4">
              Welcome to Jaathre
            </h1>
            <p className="text-xl text-gray-800 max-w-2xl">
              Experience the vibrant, spiritual, and cultural world of festivals
              across regions.
            </p>
            <Link
              to="/explore"
              className="mt-4 w-fit mx-auto px-6 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
            >
              Explore Festivals
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        {/* Introduction */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800">About Jaathre</h2>
          <p className="mt-6 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Jaathre is your gateway to discovering and participating in
            traditional festivals. We aim to celebrate the rich heritage of
            these sacred events and connect devotees worldwide.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Our Purpose */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <FaGlobeAsia className="text-primary text-6xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Purpose
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bringing information about various festivals and religious
              gatherings directly to devotees.
            </p>
          </div>

          {/* How You Can Participate */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <FaHandsHelping className="text-primary text-6xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get Involved
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Engage with and contribute to these events through discovery,
              donations, and participation.
            </p>
            <Link
              to="/events"
              className="mt-4 inline-block text-primary hover:underline font-medium"
            >
              Explore &rarr;
            </Link>
          </div>

          {/* Our Vision */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <FaHeart className="text-primary text-6xl" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Building a strong community of devotees who can connect, learn,
              and share in the spirit of devotion.
            </p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            If you have any questions or suggestions, feel free to reach out.
            We’d love to hear from you!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
          >
            <FaEnvelope className="mr-2" /> Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
