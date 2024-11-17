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
import Siddaganga1 from "../assets/sidda1.jpg";
import Siddaganga2 from "../assets/sidda2.jpg";
import Siddaganga3 from "../assets/sidda3.jpg";
import SiddagangaMutt from "../assets/siddaganga-mutt.jpg";
import SiddagangaNight from "../assets/siddaganga-night.jpg";
import SiddagangaSeer from "../assets/siddagangaseer.jpg";

export default function SiddagangaJaathre() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: Siddaganga1,
      alt: "Siddaganga Jaathre - Devotees Gathering at Siddaganga Mutt",
    },
    {
      src: Siddaganga2,
      alt: "Offerings and Prayers in Honor of Swamiji",
    },
    {
      src: Siddaganga3,
      alt: "Celebrations and Community Meals",
    },
    {
      src: SiddagangaMutt,
      alt: "Siddaganga Mutt Complex",
    },
    {
      src: SiddagangaNight,
      alt: "Siddaganga Mutt Illuminated at Night",
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
          Siddaganga Jaathre
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          An auspicious festival celebrating the legacy of Siddaganga Mutt in
          Karnataka
        </p>
      </header>

      {/* Main Content Section */}
      <div className="flex justify-between w-full space-x-6 min-h-[60vh]">
        {/* About Section */}
        <section className="w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            About Siddaganga Jaathre
          </h1>

          <div className="mb-2">
            <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
          </div>
          <p className="text-gray-500 text-lg text-justify mt-2">
            Siddaganga Jaathre is a revered annual festival held at the
            Siddaganga Mutt in Tumkur, Karnataka. This festival celebrates the
            teachings and legacy of the great saint Dr. Shivakumara Swamiji and
            the humanitarian work of the mutt. Thousands of devotees gather to
            participate in spiritual discourses, offer prayers, and engage in
            community services. The festival is a testament to the mutt’s
            commitment to education, spirituality, and social welfare.
          </p>
        </section>

        {/* Image Carousel Section */}
        <section className="w-1/2 flex flex-col">
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
                        className="min-w-full min-h-full object-cover rounded-lg"
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
            Celebrate the Legacy of Siddaganga Jaathre
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              {/* Highlight Item 1 */}
              <div className="space-y-3">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl">
                  <Music className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Spiritual Discourses
                </h1>
                <p className="text-gray-500 text-left">
                  Insights from scholars and monks, focusing on Swamiji’s
                  teachings and spiritual guidance.
                </p>
              </div>

              {/* Highlight Item 2 */}
              <div className="space-y-3">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl">
                  <Users className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Community Meals
                </h1>
                <p className="text-gray-500 text-left">
                  Mass meal offerings are held, symbolizing the mutt’s
                  commitment to feeding the needy.
                </p>
              </div>

              {/* Highlight Item 3 */}
              <div className="space-y-3">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl">
                  <Lightbulb className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Devotional Ceremonies
                </h1>
                <p className="text-gray-500 text-left">
                  Rituals and prayers to honor Dr. Shivakumara Swamiji, who is
                  revered as a "walking god" by his devotees.
                </p>
              </div>

              {/* Highlight Item 4 */}
              <div className="space-y-3">
                <span className="inline-block p-3 text-red-500 bg-red-100 rounded-xl">
                  <Palette className="w-6 h-6" />
                </span>
                <h1 className="text-xl font-semibold text-gray-700 capitalize">
                  Educational Services
                </h1>
                <p className="text-gray-500 text-left">
                  Special focus on the mutt’s contributions to education, with
                  gatherings celebrating student achievements.
                </p>
              </div>
            </div>

            {/* Image beside Highlights */}
            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full border"
                src={SiddagangaMutt}
                alt="Siddaganga Jaathre Festival"
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
              A Glimpse into Siddaganga Mutt's Legacy
            </h1>
            <div className="mb-2">
              <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
            </div>
            <p className="mt-4 text-gray-600 text-justify text-lg">
              Established centuries ago, Siddaganga Mutt has played a pivotal
              role in providing free education and shelter to students in need.
              Under the leadership of Dr. Shivakumara Swamiji, the mutt has
              become a beacon of social and spiritual guidance, impacting
              millions across Karnataka. Siddaganga Jaathre celebrates this
              legacy, drawing devotees and visitors who come to pay homage,
              offer their support, and participate in the ongoing work of the
              mutt.
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
                <span className="mx-3">Educational Outreach</span>
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
                <span className="mx-3">Spiritual Guidance</span>
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
                <span className="mx-3">Social Welfare</span>
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
                <span className="mx-3">Community Services</span>
              </div>

              {/* Key Point 5 */}
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
                <span className="mx-3">Spiritual Legacy</span>
              </div>

              {/* Key Point 6 */}
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
                <span className="mx-3">Global Influence</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-lg shadow-lg"
            src={SiddagangaNight}
            alt="Shravana Belagola Landscape"
          />
        </div>
      </section>

      {/* Image Section */}
      <section className="container flex flex-col lg:flex-row mx-auto space-y-6 min-h-[70vh] mt-24">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl text-left">
              The History of Siddaganga Mutt
            </h1>
            <div className="mb-2">
              <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
            </div>
            <p className="mt-4 text-gray-600 text-justify text-lg">
              Established centuries ago, Siddaganga Mutt has played a pivotal
              role in providing free education and shelter to students in need.
              Under the leadership of Dr. Shivakumara Swamiji, the mutt has
              become a beacon of social and spiritual guidance, impacting
              millions across Karnataka. Siddaganga Jaathre celebrates this
              legacy, drawing devotees and visitors who come to pay homage,
              offer their support, and participate in the ongoing work of the
              mutt.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-lg shadow-lg"
            src={Siddaganga1}
            alt="Siddaganga Jaathre"
          />
        </div>
      </section>

      {/* Image Section */}
      <section className="container flex flex-col lg:flex-row mx-auto space-y-6 min-h-[70vh] mt-24">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl text-left">
              The Legacy of Siddaganga Mutt
            </h1>
            <div className="mb-2">
              <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
            </div>
            <p className="mt-4 text-gray-600 text-justify text-lg">
              Established centuries ago, Siddaganga Mutt has played a pivotal
              role in providing free education and shelter to students in need.
              Under the leadership of Dr. Shivakumara Swamiji, the mutt has
              become a beacon of social and spiritual guidance, impacting
              millions across Karnataka. Siddaganga Jaathre celebrates this
              legacy, drawing devotees and visitors who come to pay homage,
              offer their support, and participate in the ongoing work of the
              mutt.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-lg shadow-lg"
            src={SiddagangaSeer}
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
              <MapPin className="mr-2 text-red-500" />
              <span className="text-lg">
                Location: Siddaganga Mutt, Tumkur, Karnataka, India
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Calendar className="mr-2 text-red-500" />
              <span className="text-lg">
                Dates: Held annually, typically in January (dates may vary, so
                please check the latest schedule)
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Music className="mr-2 text-red-500" />
              <span className="text-lg">
                Activities: Spiritual Discourses, Community Meals, Cultural
                Programs
              </span>
            </div>
            <div className="flex items-center mb-2">
              <Users className="mr-2 text-red-500" />
              <span className="text-lg">
                Attendance: Thousands of Devotees and Tourists
              </span>
            </div>
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.9999982384615!2d76.68840901536693!3d13.500093690378458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6ad1c8c44b179%3A0x4d0d9f5f4c5f4e2b!2sSiddaganga%20Mutt!5e0!3m2!1sen!2sin!4v1653644096967!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Siddaganga Jaathre Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
