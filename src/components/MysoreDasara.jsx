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
import Dasara1 from "../assets/dasara1.webp";
import Dasara2 from "../assets/dasara2.jpg";
import Dasara3 from "../assets/dasara3.jpg";
import MysorePalace from "../assets/mysore-palace.webp";
import MysoreNight from "../assets/mysore-night.jpg";

export default function MysoreDasara() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: Dasara1,
      alt: "The Majestic Dasara Procession",
    },
    {
      src: Dasara2,
      alt: "Illuminated Mysore Palace",
    },
    {
      src: Dasara3,
      alt: "Traditional Dance Performances",
    },
    {
      src: MysorePalace,
      alt: "Mysore Palace During Dasara",
    },
    {
      src: MysoreNight,
      alt: "Nighttime Illumination of Mysore",
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
      <header className="text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 py-12 rounded-b-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
          Mysore Dasara
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          The Grand Festival Celebrating the Glory of Karnataka
        </p>
      </header>

      {/* Main Content Section */}
      <div className="flex justify-between w-full space-x-6 min-h-[60vh]">
        {/* About Section */}
        <section className="w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            About Mysore Dasara
          </h1>

          <div className="mb-2">
            <span className="inline-block w-40 h-1 bg-purple-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-purple-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-purple-500 rounded-full"></span>
          </div>
          <p className="text-gray-500 text-lg text-justify mt-2">
            Mysore Dasara, also known as Nadahabba (the state festival), is a
            spectacular 10-day celebration held in the city of Mysore,
            Karnataka. This grand event celebrates the victory of good over evil
            and showcases the vibrant cultural heritage of Karnataka. The
            festival culminates on Vijayadashami, marking the triumph of Goddess
            Chamundeshwari over the demon Mahishasura. Thousands of visitors
            gather to witness the traditional processions, royal ceremonies, and
            dazzling illuminations.
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
                        className="min-w-full min-h-full object-cover rounded-lg"
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
      <section className="bg-white dark:bg-gray-900 min-h-[85vh] flex justify-center items-center mt-12 lg:mt-24">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            Celebrate the Splendor of Mysore Dasara
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-purple-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-purple-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-purple-500 rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div className="space-y-3">
                <span className="inline-block p-3 text-purple-500 bg-purple-100 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1.187 1.187 0 001.131.823h4.905c.969 0 1.372 1.24.588 1.81l-3.975 2.89a1.187 1.187 0 00-.416 1.34l1.518 4.674c.3.921-.755 1.688-1.538 1.12l-3.975-2.89a1.187 1.187 0 00-1.382 0l-3.975 2.89c-.783.568-1.838-.199-1.538-1.12l1.518-4.674a1.187 1.187 0 00-.416-1.34L2.845 9.234c-.783-.57-.38-1.81.588-1.81h4.905a1.187 1.187 0 001.131-.823l1.518-4.674z"
                    />
                  </svg>
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Royal Procession (Jumbo Savari)
                </h1>
                <p className="text-gray-500 text-left">
                  The grand elephant procession with the golden howdah is a
                  major attraction, symbolizing the royal heritage of Mysore.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-purple-500 bg-purple-100 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.68l-1.06-1.07a5.5 5.5 0 00-7.78 7.78l8.49 8.49a.75.75 0 001.06 0l8.49-8.49a5.5 5.5 0 000-7.78z"
                    />
                  </svg>
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Palace Illumination
                </h1>
                <p className="text-gray-500 text-left">
                  Mysore Palace is lit up with over 100,000 lights, creating a
                  mesmerizing spectacle.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-purple-500 bg-purple-100 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2a10 10 0 0110 10v3a4 4 0 01-4 4H6a4 4 0 01-4-4v-3a10 10 0 0110-10z"
                    />
                  </svg>
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Cultural Programs
                </h1>
                <p className="text-gray-500 text-left">
                  Enjoy folk dance, music, and other performances that showcase
                  Karnataka’s diverse culture.
                </p>
              </div>

              <div className="space-y-3">
                <span className="inline-block p-3 text-purple-500 bg-purple-100 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1 4h1a1 1 0 001-1v-3a1 1 0 10-2 0v4zm-3-4h.01M13 9h-.01M9 21h6a1 1 0 001-1V4a1 1 0 00-1-1H9a1 1 0 00-1 1v16a1 1 0 001 1z"
                    />
                  </svg>
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Wrestling Competitions
                </h1>
                <p className="text-gray-500 text-left">
                  A traditional Dasara event that brings together the best
                  wrestlers from across the state.
                </p>
              </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full border"
                src={MysorePalace}
                alt="Mysore Dasara Festival"
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
              A Glimpse into Mysore Dasara's History
            </h1>
            <div className="mb-2">
              <span className="inline-block w-40 h-1 bg-purple-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-purple-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-purple-500 rounded-full"></span>
            </div>
            <p className="mt-4 text-gray-600 text-justify text-lg">
              The origins of Mysore Dasara can be traced back over 400 years to
              the Wadiyar dynasty. Celebrated with great pomp and grandeur, the
              festival was historically a showcase of the kingdom’s wealth and
              cultural prosperity. The Wadiyar kings initiated the tradition of
              the royal procession and other cultural events that continue to be
              celebrated to this day. Today, Mysore Dasara is a cultural
              landmark, drawing people from all over the world.
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
                <span className="mx-3">Wadiyar Dynasty</span>
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
                <span className="mx-3">Royal Heritage</span>
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
                <span className="mx-3">Cultural Prosperity</span>
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
                <span className="mx-3">Global Attraction</span>
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
                <span className="mx-3">Cultural Landmark</span>
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
                <span className="mx-3">Traditional Festivities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-lg shadow-lg"
            src={MysoreNight}
            alt="Mysore Dasara Landscape"
          />
        </div>
      </section>

      {/* Visitor Information Section */}
      <section className="container mx-auto mt-24">
        <h2 className="text-3xl font-semibold mb-4">Visitor Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 text-purple-500" />
              <span className="text-lg">
                Location: Mysore, Karnataka, India
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Calendar className="mr-2 text-purple-500" />
              <span className="text-lg">
                Dates: Typically held in September or October, concluding on
                Vijayadashami
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Music className="mr-2 text-purple-500" />
              <span className="text-lg">
                Activities: Processions, Cultural Performances, Illumination
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Users className="mr-2 text-purple-500" />
              <span className="text-lg">
                Attendance: Thousands of Visitors and Tourists
              </span>
            </div>
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.9204622237754!2d76.6393815153134!3d12.305158290842216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf6e4f0b58f3f1%3A0xc9c9f3e5e8f3e8e6!2sMysore%20Palace!5e0!3m2!1sen!2sin!4v1653644096967!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mysore Dasara Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
