import React, { useState, useEffect } from "react";
import { useProjects } from "../contexts/AppContext";
import { AiFillDelete } from "react-icons/ai";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [timelogId, setTimelogId] = useState(null);

  const {
    addTimeLog,
    getTask,
    tasks,
    deleteTimelog,
    getTimelog,
    timelog,
    stopTimelog,
  } = useProjects();

  const handleTime = async (id) => {
    if (isActive) {
      console.log("STOP", timelogId);
      // do stop things
      await stopTimelog(timelogId, { stopTime: new Date() });
      setIsActive(false);
    } else {
      const taskData = {
        startTime: startTime,
        taskId: id,
      };

      const response = await addTimeLog(taskData);
      setTimelogId(response.id);

      await getTask();
      setIsActive(!isActive);

      getTimelog();
      console.log(isActive);
    }
  };

  const handleDeleteTime = async (id) => {
    await deleteTimelog(id);
    getTimelog();
    return console.log(id);
  };


  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, startTime]);

  return (
    <div className="app">
      {tasks.map((task) => (
        <div key={task.id} className="row">
          {timelog
            .filter((time) => time.taskId === task.id)
            .map((time) => (
              <div key={time.id}>
                <p>{time.id}</p>
                <AiFillDelete onClick={() => handleDeleteTime(time.id)} />
              </div>
            ))}
          <div className="time">{seconds}s</div>
          <div>{task.title}</div>
          <button
            className={`button button-primary button-primary-${
              isActive ? "active" : "inactive"
            }`}
            onClick={() => handleTime(task.id)}
          >
            {isActive ? "Stop" : "Start"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Timer;
