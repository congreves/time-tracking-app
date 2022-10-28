import React, { useState } from "react";
import styled from "styled-components";
import { GrFormAdd } from "react-icons/gr";
import { useProjects } from "../contexts/AppContext";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
  margin: 5%;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;
const CardHeading = styled.h3``;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProjectLabel = styled.label`
  padding-bottom: 1em;
`;
const ProjectInput = styled.div`
  display: flex;
  padding-bottom: 2em;
`;
const ProjectTitle = styled.input``;
const ProjectAddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProjectTask = styled.div`
  display: flex;
  flex-direction: column;
`;
const TaskLabel = styled.label`
  padding-bottom: 1em;
`;
const TaskInput = styled.div`
  display: flex;
`;
const TaskTitle = styled.input``;

const TaskAddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function CreateCard() {
  const { addProject, getProject } = useProjects();
  const [input, setInput] = useState("");
  const [color, setColor] = useState("#2284e");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = async () => {
    const projectData = {
      name: input,
      color: color,
    };
    await addProject(projectData);
    getProject();
    setInput("");
    setColor(projectData)
  };

  console.log(input);

  return (
    <CardWrapper>
      <CardHeading>Create a project</CardHeading>
      <CardBody>
        <ProjectLabel>Project name </ProjectLabel>
        <ProjectInput>
          <ProjectTitle
            value={input}
            onChange={handleInput}
            placeholder="Write here.."
          ></ProjectTitle>
          <ProjectAddButton onClick={handleAdd}>
            Add <GrFormAdd />
          </ProjectAddButton>
        </ProjectInput>
        <ProjectTask>
          <TaskLabel>Add a project task </TaskLabel>
          <TaskInput>
            <TaskTitle placeholder="Write here.."></TaskTitle>{" "}
            <TaskAddButton>
              Add <GrFormAdd />
            </TaskAddButton>
          </TaskInput>
        </ProjectTask>
      </CardBody>
    </CardWrapper>
  );
}

export default CreateCard;
