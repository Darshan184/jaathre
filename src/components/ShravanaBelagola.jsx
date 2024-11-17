"use client";

import { useState } from "react";
import {
  MapPin,
  Calendar,
  Music,
  Users,
  Lightbulb,
  Palette,
} from "lucide-react";
import Shravana1 from "../assets/shravana1.jpg";
import Shravana2 from "../assets/shravana2.jpg";
import Shravana3 from "../assets/shravana3.jpg";
import BahubaliStatue from "../assets/bahubali-statue.jpg";
import ShravanaPanorama from "../assets/shravana-panorama.jpg";

export default function ShravanaBelagola() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: Shravana1,
      alt: "Mahamastakabhisheka Ceremony",
    },
    {
      src: Shravana2,
      alt: "Monolithic Statue of Lord Bahubali",
    },
    {
      src: Shravana3,
      alt: "Pilgrims at Shravana Belagola",
    },
    {
      src: BahubaliStatue,
      alt: "Bahubali Statue Close-up",
    },
    {
      src: ShravanaPanorama,
      alt: "Shravana Belagola Landscape",
    },
  ];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto mb-12">
      {/* Header Section */}
      <header className="text-center mb-12 bg-gradient-to-r from-gray-700 to-gray-900 py-12 rounded-b-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
          Shravana Belagola
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          A sacred Jain pilgrimage site known for the Mahamastakabhisheka
          festival
        </p>
      </header>

      {/* Main Content Section */}
      <div className="flex justify-between w-full space-x-6 min-h-[60vh]">
        {/* About Section */}
        <section className="w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            About Shravana Belagola
          </h1>

          <div className="mb-2">
            <span className="inline-block w-40 h-1 bg-gray-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-gray-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-gray-500 rounded-full"></span>
          </div>
          <p className="text-gray-500 text-lg text-justify mt-2">
            Shravana Belagola, located in Karnataka, is a prominent Jain
            pilgrimage site known for its towering monolithic statue of Lord
            Bahubali (Gommateshwara). Every 12 years, the site hosts the grand
            Mahamastakabhisheka festival, where thousands gather to witness the
            ritual anointing of the statue with sacred substances like milk,
            saffron, and sandalwood paste, honoring Jain beliefs in
            non-violence, peace, and spirituality.
          </p>
        </section>

        {/* Image Carousel Section */}
        <section className="w-1/2 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Festival Highlights</h2>
          <div className="flex justify-between items-center w-full max-w-2xl mx-auto">
            <button
              onClick={prevImage}
              className="flex w-fit h-fit my-auto transform bg-gray-200 rounded-full px-[0.9rem] shadow-md hover:bg-gray-300 transition"
            >
              &#8592;
            </button>
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${activeImage * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="flex-none w-full">
                    <div className="aspect-square flex items-center justify-center p-6 bg-white rounded-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="min-w-full min-h-full max-h-[30rem] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={nextImage}
              className="flex w-fit h-fit my-auto transform bg-gray-200 rounded-full px-[0.9rem] shadow-md hover:bg-gray-300 transition"
            >
              &#8594;
            </button>
          </div>
        </section>
      </div>

      {/* Highlights Section */}
      <section className="bg-white dark:bg-gray-900 min-h-[85vh] flex justify-center items-center mt-12">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            Experience the Spirituality of Shravana Belagola
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-gray-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-gray-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-gray-500 rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              {/* Highlight Items */}
              <div className="space-y-3">
                <span className="inline-block p-3 text-gray-500 bg-gray-100 rounded-xl">
                  <Lightbulb className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Mahamastakabhisheka
                </h1>
                <p className="text-gray-500 text-left">
                  This grand ritual, held every 12 years, is the main event
                  where the statue of Bahubali is anointed with milk, water,
                  saffron, and other sacred items.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-gray-500 bg-gray-100 rounded-xl">
                  <Users className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Religious Gatherings
                </h1>
                <p className="text-gray-500 text-left">
                  Jain monks, scholars, and devotees from across the world come
                  together for religious discourses and spiritual gatherings.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-gray-500 bg-gray-100 rounded-xl">
                  <Music className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Cultural Programs
                </h1>
                <p className="text-gray-500 text-left">
                  Traditional Jain art forms, music, and dance performances
                  highlight the cultural significance of the festival.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-gray-500 bg-gray-100 rounded-xl">
                  <Palette className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Spiritual Discourses
                </h1>
                <p className="text-gray-500 text-left">
                  Renowned Jain monks deliver spiritual teachings, spreading
                  messages of peace and non-violence.
                </p>
              </div>
            </div>

            {/* Image beside Highlights */}
            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full border"
                src={BahubaliStatue}
                alt="Shravana Belagola Festival"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Historical Significance Section */}
      <section className="container flex flex-col lg:flex-row mx-auto space-y-6 min-h-[70vh] mt-24">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl text-left">
              The History of Shravana Belagola
            </h1>
            <div className="mb-2">
              <span className="inline-block w-40 h-1 bg-gray-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-gray-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-gray-500 rounded-full"></span>
            </div>
            <p className="mt-4 text-gray-600 text-justify text-lg">
              Shravana Belagola has been a significant pilgrimage site for Jains
              since the 10th century, primarily due to the massive 57-foot-tall
              statue of Lord Bahubali. Built by the Ganga dynasty minister
              Chavundaraya, this statue is an architectural marvel and a symbol
              of Jain philosophy. The Mahamastakabhisheka is a deeply revered
              ritual, showcasing the strong cultural and spiritual heritage of
              Jainism and drawing pilgrims from around the globe.
            </p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2 text-md">
              <div className="flex items-center text-gray-800">
                <svg
                  className="w-5 h-5 mx-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3">Ancient Pilgrimage Site</span>
              </div>
              <div className="flex items-center text-gray-800">
                <svg
                  className="w-5 h-5 mx-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3">Monolithic Marvel</span>
              </div>
              <div className="flex items-center text-gray-800">
                <svg
                  className="w-5 h-5 mx-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3">Jain Philosophy</span>
              </div>
              <div className="flex items-center text-gray-800">
                <svg
                  className="w-5 h-5 mx-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3">Cultural Heritage</span>
              </div>
              <div className="flex items-center text-gray-800">
                <svg
                  className="w-5 h-5 mx-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3">Architectural Wonder</span>
              </div>
              <div className="flex items-center text-gray-800">
                <svg
                  className="w-5 h-5 mx-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3">Spiritual Significance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-lg shadow-lg"
            src={ShravanaPanorama}
            alt="Shravana Belagola Landscape"
          />
        </div>
      </section>

      {/* Visitor Information Section */}
      <section className="container mx-auto mt-24">
        <h2 className="text-3xl font-semibold mb-4">Visitor Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 text-gray-500" />
              <span className="text-lg">
                Location: Shravana Belagola, Karnataka, India
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Calendar className="mr-2 text-gray-500" />
              <span className="text-lg">
                Dates: Mahamastakabhisheka occurs every 12 years, next
                anticipated around 2030
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Music className="mr-2 text-gray-500" />
              <span className="text-lg">
                Activities: Rituals, Spiritual Discourses, Cultural Programs
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Users className="mr-2 text-gray-500" />
              <span className="text-lg">
                Attendance: Thousands of Devotees and Tourists
              </span>
            </div>
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.5561462851037!2d76.48815451529547!3d12.857503019553929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a066a926d38d%3A0x110110eb96a5e282!2sShravanabelagola%2C%20Karnataka%205730135!5e0!3m2!1sen!2sin!4v1653644096967!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shravana Belagola Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
