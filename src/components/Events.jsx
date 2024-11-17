// EventPage.js
import React from "react";
import { useParams } from "react-router-dom";
import "./Events.css";
import CalendarPage from "./Calendar";

const EventPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      {" "}
      {/* Add the background class here */}
      <div className="w-full">
        {" "}
        {/* Keep your event details inside another div for layout */}
        <h1 className="text-3xl text-center my-4 font-bold">Event Details</h1>
        {/* <p>Details for event ID: {id}</p> */}
        {/* You could add more event information here */}
        <div className="">
          <CalendarPage />
        </div>
      </div>
    </div>
  );
};

export default EventPage;
