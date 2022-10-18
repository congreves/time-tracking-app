import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Calendar from "react-calendar";
import "../index.css";
import Projects from "../components/Projects";

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Navbar />
      <h1>Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="text-center">Selected date: {date.toDateString()}</div>
      <Projects/>
    </div>
  );
}

export default CalendarPage;
