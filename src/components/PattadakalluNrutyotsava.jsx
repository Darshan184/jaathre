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
import Pattadakallu1 from "../assets/pattadakallu1.jpg";
import Pattadakallu2 from "../assets/pattadakal2.jpg";
import Pattadakallu3 from "../assets/pattadakal3.jpg";
import PattadakalTemple from "../assets/pattadakal-temple.jpg";

export default function PattadakalluNrutyotsava() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: Pattadakallu1,
      alt: "Pattadakallu Nrutyotsava - Dancers Performing",
    },
    {
      src: Pattadakallu2,
      alt: "Beautiful Illumination of Pattadakal Temples",
    },
    {
      src: Pattadakallu3,
      alt: "Artists in Traditional Attire",
    },
    {
      src: PattadakalTemple,
      alt: "Pattadakal Temple Complex",
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
      <header className="text-center mb-12 bg-gradient-to-r from-red-600 to-orange-500 py-12 rounded-b-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
          Pattadakallu Nrutyotsava
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          A celebration of classical dance amidst the historic temples of
          Pattadakal, Karnataka
        </p>
      </header>

      {/* Main Content Section */}
      <div className="flex justify-between w-full space-x-6 min-h-[60vh]">
        {/* About Section */}
        <section className="w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            About Pattadakallu Nrutyotsava
          </h1>

          <div className="mb-2">
            <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
          </div>
          <p className="text-gray-500 text-lg text-justify mt-2">
            The Pattadakallu Nrutyotsava, held in the UNESCO World Heritage Site
            of Pattadakal, Karnataka, is a prestigious dance festival that
            brings classical dance forms to life in an ancient setting.
            Celebrating the artistry and heritage of India, this festival
            attracts renowned artists who perform against the backdrop of the
            stunning temples of Pattadakal, known for their Chalukya
            architecture.
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
            Experience the Elegance of Pattadakallu Nrutyotsava
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              {/* Highlight Items */}
              <div className="space-y-3">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl">
                  <Palette className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Classical Dance Performances
                </h1>
                <p className="text-gray-500 text-left">
                  Witness mesmerizing performances in dance forms such as
                  Bharatanatyam, Odissi, Kuchipudi, and Kathak.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl">
                  <Lightbulb className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Historical Setting
                </h1>
                <p className="text-gray-500 text-left">
                  The temples of Pattadakal, with their remarkable sculptures
                  and architecture, create a breathtaking setting for the
                  festival.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Illumination and Decor
                </h1>
                <p className="text-gray-500 text-left">
                  The temples are beautifully illuminated, enhancing the
                  ethereal atmosphere and connecting the audience with the
                  heritage of the place.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl">
                  <Users className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Cultural Exchange
                </h1>
                <p className="text-gray-500 text-left">
                  This festival fosters cultural exchange, bringing together
                  artists, scholars, and art enthusiasts from across India and
                  the world.
                </p>
              </div>
            </div>

            {/* Image beside Highlights */}
            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full border"
                src={Pattadakallu2}
                alt="Pattadakallu Nrutyotsava Festival"
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
              A Glimpse into Pattadakal's History
            </h1>
            <div className="mb-2">
              <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
            </div>
            <p className="mt-4 text-gray-600 text-justify text-lg">
              Pattadakal, a UNESCO World Heritage Site, was once a ceremonial
              capital of the Chalukya dynasty, flourishing between the 7th and
              9th centuries. The site is renowned for its magnificent temples,
              blending northern and southern Indian architectural styles. This
              unique festival celebrates the cultural richness of Pattadakal by
              presenting classical dance performances that honor the spirit of
              this ancient site.
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
                <span className="mx-3">UNESCO Heritage Site</span>
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
                <span className="mx-3">Chalukya Architecture</span>
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
                <span className="mx-3">Architectural Marvels</span>
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
                <span className="mx-3">Blend of Styles</span>
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
                <span className="mx-3">Historical Significance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-lg shadow-lg"
            src={PattadakalTemple}
            alt="Pattadakal Temples at Night"
          />
        </div>
      </section>

      {/* Visitor Information Section */}
      <section className="container mx-auto mt-24">
        <h2 className="text-3xl font-semibold mb-4">Visitor Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 text-red-500" />
              <span className="text-lg">
                Location: Pattadakal, Bagalkot District, Karnataka, India
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Calendar className="mr-2 text-red-500" />
              <span className="text-lg">
                Dates: Typically held in January or February (Dates may vary,
                check the latest schedule)
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Music className="mr-2 text-red-500" />
              <span className="text-lg">
                Activities: Classical Dance Performances, Cultural Programs
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Users className="mr-2 text-red-500" />
              <span className="text-lg">
                Attendance: Art Enthusiasts, Tourists, Scholars
              </span>
            </div>
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.8815984275565!2d75.68666851535123!3d15.952443746089364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb713d8b1d6e1e9%3A0x4dfab10a4b0b5d9f!2sPattadakal%20Temple%20Complex!5e0!3m2!1sen!2sin!4v1653644096967!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pattadakallu Nrutyotsava Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
