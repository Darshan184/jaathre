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
import Udupi1 from "../assets/udupi1.jpeg";
import Udupi2 from "../assets/udupi2.jpeg";
import Udupi3 from "../assets/udupi3.jpeg";
import KrishnaTemple from "../assets/krishna-temple.jpg";
import Parade from "../assets/parade.jpg";

export default function UdupiPariyaya() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: Udupi1,
      alt: "Udupi Pariyaya - Grand Procession",
    },
    {
      src: Udupi2,
      alt: "Religious Rituals at Udupi Krishna Temple",
    },
    {
      src: Udupi3,
      alt: "Procession of Saints and Devotees",
    },
    {
      src: KrishnaTemple,
      alt: "Sri Krishna Temple, Udupi",
    },
    {
      src: Parade,
      alt: "Grand Parade During Udupi Pariyaya",
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
      <header className="text-center mb-12 bg-gradient-to-r from-blue-600 to-teal-500 py-12 rounded-b-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
          Udupi Pariyaya
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          An iconic religious event in Udupi, Karnataka, held every two years
        </p>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-between w-full space-y-6 lg:space-y-0 lg:space-x-6 min-h-[60vh]">
        {/* About Section */}
        <section className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            About Udupi Pariyaya
          </h1>

          <div className="mb-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>
          <p className="text-gray-500 text-lg text-justify mt-2">
            The Udupi Pariyaya is a significant religious event celebrated every
            two years in the temple town of Udupi, Karnataka. It marks the
            transfer of responsibilities to one of the eight mutts (monasteries)
            in Udupi for managing the famous Sri Krishna Temple. This festival
            is characterized by grand processions, rituals, and celebrations,
            showcasing the rich religious heritage of the region.
          </p>
        </section>

        {/* Image Carousel Section */}
        <section className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Festival Highlights</h2>
          <div className="flex justify-between items-center w-full max-w-2xl mx-auto">
            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="flex w-fit h-fit my-auto transform bg-gray-200 rounded-full px-[0.9rem] shadow-md hover:bg-gray-300 transition"
            >
              &#8592;
            </button>

            {/* Carousel Images */}
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

            {/* Next Button */}
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
            Experience the Grandeur of Udupi Pariyaya
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              {/* Highlight Item 1 */}
              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                  <Music className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Grand Procession
                </h1>
                <p className="text-gray-500 text-left">
                  The idol of Marikamba is carried through the streets in a
                  grand chariot procession, accompanied by traditional music,
                  dance, and hundreds of devotees.
                </p>
              </div>

              {/* Highlight Item 2 */}
              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                  <Users className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Traditional Drumming and Folk Performances
                </h1>
                <p className="text-gray-500 text-left">
                  Musicians perform traditional drumming, and folk artists
                  showcase vibrant cultural dances during the procession.
                </p>
              </div>

              {/* Highlight Item 3 */}
              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                  <Lightbulb className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Religious Offerings
                </h1>
                <p className="text-gray-500 text-left">
                  Devotees make offerings to the goddess in the form of flowers,
                  coconuts, and other items, seeking blessings for prosperity
                  and protection.
                </p>
              </div>

              {/* Highlight Item 4 */}
              <div className="space-y-3">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl">
                  <Palette className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Decorated Streets and Lighting
                </h1>
                <p className="text-gray-500 text-left">
                  The streets of Sirsi are beautifully decorated with lights and
                  banners, adding to the festival’s grandeur.
                </p>
              </div>
            </div>

            {/* Image beside Highlights */}
            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full border"
                src={KrishnaTemple}
                alt="Udupi Pariyaya Festival"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Historical Significance Section */}
      <section className="container flex flex-col lg:flex-row mx-auto space-y-6 lg:space-y-0 lg:space-x-6 min-h-[70vh] mt-24">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl text-left">
              The Tradition of Udupi Pariyaya
            </h1>
            <div className="mb-2">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            </div>
            <p className="mt-4 text-gray-600 text-justify text-lg">
              Udupi, renowned for the Dvaita philosophy founded by the saint
              Madhvacharya, houses eight monasteries (Ashta Mutts). Every two
              years, the leadership and administration of the Sri Krishna Temple
              rotate among the heads of these eight mutts. This rotation of
              duties, known as Pariyaya, is a centuries-old tradition that
              upholds the spiritual heritage of Udupi.
            </p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2 text-md">
              {/* Key Point 1 */}
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
                <span className="mx-3">Pariyaya Paryaya Ceremony</span>
              </div>

              {/* Key Point 2 */}
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
                <span className="mx-3">Grand Procession</span>
              </div>

              {/* Key Point 3 */}
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
                <span className="mx-3">Religious Discourses and Prayers</span>
              </div>

              {/* Key Point 4 */}
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
                <span className="mx-3">Annadanam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-lg shadow-lg"
            src={Parade}
            alt="Udupi Pariyaya Festival Parade"
          />
        </div>
      </section>

      {/* Visitor Information Section */}
      <section className="container mx-auto mt-24">
        <h2 className="text-3xl font-semibold mb-4">Visitor Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 text-blue-500" />
              <span className="text-lg">Location: Udupi, Karnataka, India</span>
            </div>
            <div className="flex items-center mb-2">
              <Calendar className="mr-2 text-blue-500" />
              <span className="text-lg">
                Dates: Held every two years, typically in January (check the
                schedule for exact dates)
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Music className="mr-2 text-blue-500" />
              <span className="text-lg">
                Activities: Grand Procession, Traditional Drumming, Folk
                Performances, Religious Offerings
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Users className="mr-2 text-blue-500" />
              <span className="text-lg">
                Attendance: Thousands of Devotees and Tourists
              </span>
            </div>
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.760231549795!2d74.74212081535599!3d13.34912041011068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba23003a8e65%3A0x212435fe7b90a56c!2sSri%20Krishna%20Matha%2C%20Udupi!5e0!3m2!1sen!2sin!4v1653644096967!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Udupi Krishna Matha Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
