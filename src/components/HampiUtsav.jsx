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
import Charriot from "../assets/chariot-hampi.jpg";
import Hampi from "../assets/hampi4.jpg";
import Hampi1 from "../assets/hampi.jpg";
import Hampi2 from "../assets/hampi2.jpg";
import Hampi3 from "../assets/hampi3.jpg";

export default function HampiUtsav() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: Hampi1,
      alt: "Traditional Music and Dance",
    },
    {
      src: Charriot,
      alt: "Hampi Utsav - Cultural Performances",
    },
    {
      src: Hampi,
      alt: "Beautiful Lighting at Hampi",
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
      <header className="text-center mb-12 bg-gradient-to-r from-orange-600 to-amber-500 py-12 rounded-b-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
          Hampi Utsav
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          An annual celebration of Karnataka's rich history and culture
        </p>
      </header>

      <div className="flex justify-between w-full space-x-6 min-h-[60vh]">
        <section className="w-1/2 flex flex-col justify-center">
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            About Hampi Utsav
          </h1>

          <div class="mb-2">
            <span class="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
          </div>
          <p className="text-gray-500 text-lg text-justify mt-2">
            The Hampi Utsav, also known as the Vijaya Utsav, is a grand cultural
            festival held in the ancient city of Hampi, Karnataka. Celebrating
            the heritage of the Vijayanagara Empire, this event is marked by
            music, dance, art, and a variety of cultural performances, all set
            amidst the beautiful ruins of Hampi.
          </p>
        </section>

        <section className="w-1/2 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Festival Highlights</h2>
          <div className="flex w-full max-w-2xl mx-auto">
            <button
              onClick={prevImage}
              className="flex w-fit h-fit my-auto transform  bg-gray-200 rounded-full px-[0.9rem] shadow-md"
            >
              &#8592;
            </button>
            <div className="overflow-hidden">
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
              className="flex w-fit h-fit my-auto transform  bg-gray-200 rounded-full px-[0.9rem] shadow-md"
            >
              &#8594;
            </button>
          </div>
        </section>
      </div>
      <section class="bg-white dark:bg-gray-900 min-h-[85vh] flex justify-center items-center">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            Celebrate the Vibrance of Hampi's Festivals
          </h1>

          <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
          </div>

          <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              <div class="space-y-3">
                <span class="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1.187 1.187 0 001.131.823h4.905c.969 0 1.372 1.24.588 1.81l-3.975 2.89a1.187 1.187 0 00-.416 1.34l1.518 4.674c.3.921-.755 1.688-1.538 1.12l-3.975-2.89a1.187 1.187 0 00-1.382 0l-3.975 2.89c-.783.568-1.838-.199-1.538-1.12l1.518-4.674a1.187 1.187 0 00-.416-1.34L2.845 9.234c-.783-.57-.38-1.81.588-1.81h4.905a1.187 1.187 0 001.131-.823l1.518-4.674z"
                    />
                  </svg>
                </span>
                <h1 class="text-xl font-semibold text-gray-700 capitalize ">
                  Hampi Utsav
                </h1>
                <p class="text-gray-500 text-left">
                  A grand cultural festival showcasing music, dance, and vibrant
                  parades celebrating Hampi's heritage.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.68l-1.06-1.07a5.5 5.5 0 00-7.78 7.78l8.49 8.49a.75.75 0 001.06 0l8.49-8.49a5.5 5.5 0 000-7.78z"
                    />
                  </svg>
                </span>
                <h1 class="text-xl font-semibold text-gray-700 capitalize ">
                  Vijaya Dashami
                </h1>
                <p class="text-gray-500 text-left">
                  A festival of victory celebrating the triumph of good over
                  evil, marked by vibrant rituals and joyous celebrations.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 2a10 10 0 0110 10v3a4 4 0 01-4 4H6a4 4 0 01-4-4v-3a10 10 0 0110-10z"
                    />
                  </svg>
                </span>
                <h1 class="text-xl font-semibold text-gray-700 capitalize ">
                  Pampa Festival
                </h1>
                <p class="text-gray-500 text-left">
                  A spiritual event dedicated to Goddess Pampa, held with
                  traditional rituals and cultural performances.
                </p>
              </div>

              <div class="space-y-3">
                <span class="inline-block p-3 text-orange-500 bg-orange-100 rounded-xl  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1 4h1a1 1 0 001-1v-3a1 1 0 10-2 0v4zm-3-4h.01M13 9h-.01M9 21h6a1 1 0 001-1V4a1 1 0 00-1-1H9a1 1 0 00-1 1v16a1 1 0 001 1z"
                    />
                  </svg>
                </span>
                <h1 class="text-xl font-semibold text-gray-700 capitalize ">
                  Charriot Festival
                </h1>
                <p class="text-gray-500 text-left">
                  Witness the grand Rathotsava (chariot festival) with vibrant
                  processions and traditional fanfare.
                </p>
              </div>
            </div>

            <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full border"
                src={Charriot}
                alt="Hampi Festival"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="container flex flex-col lg:flex-row mx-auto space-y-6 min-h-[70vh] mt-24">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl text-left">
              A Glimpse into Hampi's Rich History
            </h1>
            <div class="mb-2">
              <span class="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
              <span class="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
              <span class="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
            </div>
            <p class="mt-4 text-gray-600 text-justify text-lg">
              Hampi, a UNESCO World Heritage Site, was the thriving capital of
              the Vijayanagara Empire in the 14th century. It is renowned for
              its stunning temples, intricate architecture, and serene
              landscapes along the Tungabhadra river. Today, Hampi stands as a
              symbol of timeless culture and historical grandeur.
            </p>
            <div class="grid gap-6 mt-8 sm:grid-cols-2 text-md">
              <div class="flex items-center text-gray-800">
                <svg
                  class="w-5 h-5 mx-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="mx-3">UNESCO Heritage Site</span>
              </div>
              <div class="flex items-center text-gray-800">
                <svg
                  class="w-5 h-5 mx-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="mx-3">Architectural Marvels</span>
              </div>
              <div class="flex items-center text-gray-800">
                <svg
                  class="w-5 h-5 mx-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="mx-3">Vijayanagara Empire</span>
              </div>
              <div class="flex items-center text-gray-800">
                <svg
                  class="w-5 h-5 mx-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="mx-3">Cultural Festivals</span>
              </div>
              <div class="flex items-center text-gray-800">
                <svg
                  class="w-5 h-5 mx-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="mx-3">Pilgrimage Destination</span>
              </div>
              <div class="flex items-center text-gray-800">
                <svg
                  class="w-5 h-5 mx-3 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span class="mx-3">Timeless Ruins</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            class="object-cover w-full h-full max-w-2xl rounded-lg shadow-lg"
            src={Hampi}
            alt="Hampi Temple Landscape"
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Visitor Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center mb-2">
              <MapPin className="mr-2 text-blue-500" />
              <span className="text-lg">Location: Hampi, Karnataka, India</span>
            </div>
            <div className="flex items-center mb-2">
              <Calendar className="mr-2 text-blue-500" />
              <span className="text-lg">
                Dates: Typically held in November (Dates may vary, check the
                latest schedule)
              </span>
            </div>
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61925.73184304578!2d76.43973755!3d15.3352869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77fd95d4be823%3A0x6e52e05076df36b8!2sHampi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1653644096967!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
