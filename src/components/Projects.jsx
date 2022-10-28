//import React, { useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Outlet, Link } from "react-router-dom";
import { GrFormAdd } from "react-icons/gr";
import CreateCard from "../components/CreateCard";
import { useProjects } from "../contexts/AppContext";
import { AiFillDelete } from "react-icons/ai";

const ProjectCard = styled.div`
  display: flex;
  align-items: center;

  background: rgba(246, 255, 236, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  gap: 2em;
`;
const ProjectColor = styled.div`
  background-color: #f4ed24;
  padding: 2em;
`;
const ProjectTime = styled.h3`
  color: #f4eff5;
`;
const ProjectTitle = styled.h3`
  color: #f4eff5;
  flex-grow: 2;
`;
const ProjectInfo = styled.section`
  width: 30%;
  display: flex;
  justify-content: space-between;
  padding-right: 2em;
  align-items: center;
`;
const Button = styled.button`
  background-color: #414344;
`;

function Projects() {
  const { projects, deleteProject, getProject } = useProjects();

  const handleDelete = async (id) => {
    await deleteProject(id);
    getProject();
    return;
  };

  return (
    <div>
      {projects.map((project) => {
        return (
          <ProjectCard key={project.id}>
            <ProjectColor
              style={{ backgroundColor: `${project.color}` }}
              key={project.projectId}
            />
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectInfo>
              <ProjectTime></ProjectTime>
              <AiFillDelete onClick={() => handleDelete(project.id)} />
              <BsThreeDotsVertical />
            </ProjectInfo>
          </ProjectCard>
        );
      })}
      <Link to={`/projects/createprojects`} element={<CreateCard />}>
        <Button>
          Add Project <GrFormAdd />{" "}
        </Button>
      </Link>
      <Outlet />
    </div>
  );
}

export default Projects;
