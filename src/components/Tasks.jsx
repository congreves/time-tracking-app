import React, { useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Outlet, Link } from "react-router-dom";
import { GrFormAdd } from "react-icons/gr";
import CreateTask from "./CreateTask";
import { useProjects } from "../contexts/AppContext";
import { AiFillDelete } from "react-icons/ai";


const Container = styled.div`
  height: 100vh;
`;

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
const Button = styled.button`
  background-color: #414344;
`;
function Tasks() {
  const { tasks, deleteTask, getTask } = useProjects();
  const [active, setActive] = useState(false);

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    getTask();
    return console.log(id);
  };

  return (
    <Container>
      {tasks.map((task) => {
        return (
          <TaskCard key={task.projectId}>
            <TaskColor />
            <TasktTitle>{task.title}</TasktTitle>
            <TaskTime></TaskTime>
            <AiFillDelete onClick={() => handleDeleteTask(task.id)} />
            <BsThreeDotsVertical />
          </TaskCard>
        );
      })}
      <Link
        to={`/tasks/createtask`}
        element={
          <CreateTask active={active}  />
        }
      >
        <Button onClick={() => setActive(true)}>
          Add Task <GrFormAdd />{" "}
        </Button>
      </Link>
      <Outlet />
    </Container>
  );
}

export default Tasks;
