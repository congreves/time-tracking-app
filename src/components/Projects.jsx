import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";

const ProjectCard = styled.div`
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
const ProjectColor = styled.div`
  background-color: #f4ed24;
  padding: 2em;
`;
const ProjectTime = styled.h3`
  color: #f4eff5;
`;
const ProjectTitle = styled.h3`
  color: #f4eff5;
`;

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((data) => data.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      {projects.map((project) => {
        return (
          <ProjectCard key={project.id}>
            <ProjectColor key={project.projectId} />
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectTime>{project.id}</ProjectTime>
            <BsThreeDotsVertical />
          </ProjectCard>
        );
      })}
    </div>
  );
}

export default Projects;
