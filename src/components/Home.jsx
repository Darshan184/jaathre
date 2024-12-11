// Home.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Carousel from "./Carousel"; // Import the custom carousel
import "./Home.css"; // Import the CSS file for styling

// Import images from the assets folder
import hampiImage from "../assets/hampi1.jpg";
import mysoreImage from "../assets/dasara1.webp";
import udupiImage from "../assets/huli1.jpeg";
import sirsiImage from "../assets/sirsi1.webp";
import shravanaImage from "../assets/shravana1.jpg";
import pattadakalluImage from "../assets/pattadakallu.jpg";

const Home = () => {
  const events = [
    {
      title: "Hampi Utsav",
      image: hampiImage,
      description:
        "A grand festival celebrating the history and culture of Hampi.",
      link: "/hampiutsav", // Link for routing
      category: "Historical Festival", // Category added for relevance
      date: "20-22 JAN 2023",
    },
    {
      title: "Mysore Dasara",
      image: mysoreImage,
      description: "A vibrant celebration of culture and tradition in Mysore.",
      link: "/mysoredasara", // Link for routing
      category: "Cultural Festival",
      date: "17-27 OCT 2023",
    },
    {
      title: "Udupi Paryaya",
      image: udupiImage,
      description: "A sacred event marking the change of leadership in Udupi.",
      link: "/udupipariyaya", // Link for routing
      category: "Religious Event",
      date: "18 JAN 2023",
    },
    {
      title: "Sirsi Marikamba Festival",
      image: sirsiImage,
      description:
        "A grand celebration dedicated to the goddess Marikamba in Sirsi.",
      link: "/sirsimarikamba", // Link for routing
      category: "Devotional Festival",
      date: "15-23 FEB 2023",
    },
    {
      title: "Shravana Belagola Mahotsav",
      image: shravanaImage,
      description:
        "A religious festival at Shravana Belagola, honoring the Jain tradition.",
      link: "/shravanabelagola", // Link for routing
      category: "Jain Festival",
      date: "9-19 FEB 2023",
    },
    {
      title: "Pattadakallu Nrutyotsava",
      image: pattadakalluImage,
      description:
        "A dance festival celebrating the rich cultural heritage of Pattadakallu.",
      link: "/pattadakallunrutyotsava", // Link for routing
      category: "Dance Festival",
      date: "14-16 MAR 2023",
    },
  ];

  return (
    <div className="">
      <div className="overlay" />
      <div className="carousel-container h-screen">
        <Carousel />
      </div>
      <br></br>
      <br></br>
      <div className="flex flex-col">
        <h1 className="flex justify-center items-center font-bold mt-4">
          Explore Festivals & Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-8">
          {events.map((event, index) => (
            <Link
              to={event.link}
              key={index}
              className="max-w-2xl bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 transform transition-transform hover:scale-105"
            >
              <img
                src={event.image}
                alt={event.title}
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-blue-600 uppercase">
                    {event.category}
                  </span>
                  <span className="text-xs text-gray-600">{event.date}</span>
                </div>
                <Link to={event.link} className="block mt-2">
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors duration-300 transform hover:underline">
                    {event.title}
                  </h3>
                </Link>
                <p className="mt-2 text-sm text-gray-600 text-left">
                  {event.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome to Jaathre!
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Discover and celebrate the vibrant festivals that connect communities
          across cultures. At Jaathre, we provide a platform for devotees to
          explore upcoming jathres, participate in sacred events, and support
          traditions that have transcended generations.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Join us in preserving cultural heritage and experience the joy of
          community celebrations!
        </p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200">
          Learn More
        </button>
      </div> */}
      <div class="container px-6 py-16 mx-auto h-[80vh] my-auto">
        <h1 className="text-center font-bold">Welcome to Jaathre</h1>
        <div class="items-center lg:flex mt-20">
          <div class="w-full lg:w-1/2 ">
            <div class="lg:max-w-lg">
              <h1 class="text-3xl font-semibold text-gray-800 lg:text-4xl">
                Celebrate community and preserve your{" "}
                <span class="text-blue-500 ">cultural heritage</span> with us!
              </h1>

              <p class="mt-3 text-gray-600 text-left">
                Discover and celebrate the vibrant festivals that connect
                communities across cultures. At Jaathre, we provide a platform
                for devotees to explore upcoming jathres, participate in sacred
                events, and support traditions that have transcended
                generations.
              </p>

              <Link
                to="/events"
                className="flex max-w-fit mt-10 px-4 py-2 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div class="flex items-center justify-center w-full mt-0 lg:mt-0 lg:w-1/2">
            <img
              class="hidden lg:block w-full h-full lg:max-w-3xl"
              src="https://merakiui.com/images/components/Catalogue-pana.svg"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;
