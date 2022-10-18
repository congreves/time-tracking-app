import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";

const TaskCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(246, 255, 236, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
const TaskColor = styled.div`
  background-color: #4ef4246f;
  padding: 2em;
`;
const TaskTime = styled.h3`
  color: #f4eff5;
`;
const TasktTitle = styled.h3`
  color: #f4eff5;
`;
function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((data) => data.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskCard key={task.projectId}>
            <TaskColor key={task.projectId} />
            <TasktTitle>{task.title}</TasktTitle>
            <TaskTime>04:01:00</TaskTime>
            <BsThreeDotsVertical />
          </TaskCard>
        );
      })}
    </div>
  );
}

export default Tasks;
