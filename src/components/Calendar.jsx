// Calendar.js
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const events = [
    { title: "Hampi Utsav", date: "2024-10-30", link: "/hampiutsav" },
    { title: "Mysore Dasara", date: "2024-10-31", link: "/mysoredasara" },
    { title: "Udupi Pariyaya", date: "2024-10-30", link: "/udupipariyaya" },
    {
      title: "Shravanbelagola Mahotsava",
      date: "2024-11-15",
      link: "/shravanbelagola",
    },
    {
      title: "Kaveri Sankramana",
      date: "2024-11-17",
      link: "/kaverisankramana",
    },
    {
      title: "Pattadakallu Nrutyotsava",
      date: "2024-11-20",
      link: "/pattadakallunrutyotsava",
    },
    { title: "Sirsi Marikamba", date: "2024-11-05", link: "/sirsimarikamba" },
    {
      title: "Siddaganga Jaathre",
      date: "2024-11-10",
      link: "/siddagangajaathre",
    },
  ];

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
  };

  const handleEventClick = (eventClickInfo) => {
    const eventLink = eventClickInfo.event.extendedProps.link;
    navigate(eventLink);
  };

  const filteredEvents = events.filter((event) => event.date === selectedDate);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Half - Calendar */}
      <div className="lg:w-1/2 p-4 cursor-pointer">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          headerToolbar={{
            left: "prev,today",
            center: "title",
            right: "next",
          }}
          height="auto"
        />
      </div>

      {/* Right Half - Event List */}
      <div className="lg:w-1/2 p-4">
        {/* All Events */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">All Events</h2>
          <ul className="space-y-2">
            {events.map((event, index) => (
              <li
                key={index}
                onClick={() => navigate(event.link)}
                className="p-4 bg-white rounded shadow hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex justify-between">
                  <span className="font-medium">{event.title}</span>
                  <span className="text-gray-500">{event.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Events on Selected Date */}
        {selectedDate && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Events on {selectedDate}
            </h2>
            {filteredEvents.length > 0 ? (
              <ul className="space-y-2">
                {filteredEvents.map((event, index) => (
                  <li
                    key={index}
                    onClick={() => navigate(event.link)}
                    className="p-4 bg-white rounded shadow hover:bg-gray-100 cursor-pointer"
                  >
                    <span className="font-medium">{event.title}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No events for this date.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
