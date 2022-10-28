import React from "react";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Tasks from "../components/Tasks";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const Container = styled.div``;

const Button = styled.button`
  background-color: #414344;
`;

function Overview() {

  return (
    <Container>
      <Navbar />
      <h1>Overview</h1>
      <Link to={`/projects`} element={<Projects />}>
        <Button>Projects</Button>
      </Link>
      <Link to={`/tasks`} element={<Tasks />}>
        <Button>Tasks</Button>
      </Link>
 
      <Outlet />
    </Container>
  );
}

export default Overview;
