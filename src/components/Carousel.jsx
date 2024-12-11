import React, { useState, useEffect } from "react";
import image1 from "../assets/hampi.jpg";
import image2 from "../assets/kaveri.jpg";
import image3 from "../assets/sirsi1.webp";
import image4 from "../assets/siddaganga.jpg";
import image5 from "../assets/melukote.jpg";
import image6 from "../assets/kadlekayi.jpg";

const Carousel = () => {
  const slides = [
    {
      image: image3,
      title: "Welcome to Jaathre",
      caption: "Discover amazing events around you!",
      name: "Sirsi",
    },
    {
      image: image2,
      title: "Join Exciting Events",
      caption: "Engage, experience, and explore with Jaathre!",
      name: "Kaveri",
    },
    {
      image: image1,
      title: "Connect with People",
      caption: "Make meaningful connections at every event.",
      name: "Hampi",
    },
    {
      image: image4,
      title: "Explore New Adventures",
      caption: "Find unique experiences that excite and inspire!",
      name: "Siddaganga",
    },
    {
      image: image5,
      title: "Celebrate Together",
      caption: "Join us in creating unforgettable memories at our events.",
      name: "Melukote",
    },
    {
      image: image6,
      title: "Experience the Culture",
      caption: "Immerse yourself in diverse cultures through our events.",
      name: "Kadalekayi",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slideshow every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [slides.length]);

  return (
    <div className="flex h-screen pt-16">
      {/* Left section with text */}
      {/* <div className="w-1/2 flex items-center h-[85vh] bg-gradient-to-br text-black ">
        <div className="text-left">
          <h1 className="text-5xl font-bold mb-4">
            {slides[currentIndex].title}
          </h1>
          <p className="text-2xl text-left">{slides[currentIndex].caption}</p>
        </div>
      </div> */}
      {/* Right section with images */}
      <div className="w-full relative h-full">
        <div className="flex justify-center items-center h-[90vh]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-full max-w-screen-lg mx-auto absolute transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <div
                className="w-full h-[40rem] bg-center bg-cover rounded-2xl shadow-md"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-96 dark:bg-gray-800">
                <h6 className="font-bold tracking-wide text-center text-gray-800 uppercase pt-3 pb-2 text-2xl">
                  {slides[currentIndex].title}
                </h6>

                <div className="flex items-center text-gray-800 justify-between px-3 py-2 bg-gray-200">
                  {/* <span className="font-bold text-gray-800">{slide.name}</span>
                  <button className="px-2 py-1 text-xs font-semibold text-white w-fit uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none">
                    Learn More
                  </button> */}
                  {slides[currentIndex].caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
