import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Calendar from "react-calendar";
import "../index.css";
import { useProjects } from "../contexts/AppContext";

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const { tasks, timelog } = useProjects();

  const transformDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  };

  const handleChange = (date) => {
    setDate(date);
  };

  console.log(timelog);
  const currentDate = date.toDateString();

  return (
    <div>
      <Navbar />
      <h1>Calendar</h1>
      {/* {!timelog ? (
        <div>No timelogs here !</div>
      ) : ( */}
      <div>
        <div className="calendar-container">
          <Calendar onChange={handleChange} value={date} />
        </div>
        <div className="text-center">Selected date: {currentDate}</div>

        {timelog
          .filter(
            (time) => time.startTime.substring(0, 10) === transformDate(date)
          )
          .map((time) => (
            <div key={time.id}>{time.startTime}</div>
          ))}
      </div>
    </div>
  );
}

export default CalendarPage;
