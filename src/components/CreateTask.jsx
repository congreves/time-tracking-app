import React, { useState } from "react";
import styled from "styled-components";
import { GrFormAdd } from "react-icons/gr";
import { useProjects } from "../contexts/AppContext";
import { CgCloseO } from "react-icons/cg";

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

const ProjectTask = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;
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
const ProjectSelector = styled.select``;
const ProjectOption = styled.option``;

function CreateTask() {
  const { addTask, getTask, projects } = useProjects();
  const [input, setInput] = useState();

  const [projectId, setProjectId] = useState("");


  const handleSelect = async (e) => {
    setProjectId(e.target.value);
  };

  const handleInputTask = async (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = async () => {
    const taskData = {
      title: input,
      projectId: projectId,
    };
    await addTask(taskData);
    getTask();
    setInput("");
  };
  console.log(input);

  return (
    <CardWrapper>
      <CardHeading>Tasks</CardHeading>
      <CardBody>
        <CgCloseO />
        <ProjectTask>
          <TaskLabel>Add task</TaskLabel>
          <TaskInput>
            <TaskTitle
              onChange={handleInputTask}
              placeholder="Write here.."
            ></TaskTitle>{" "}
            <TaskAddButton onClick={handleAddTask}>
              Add <GrFormAdd />
            </TaskAddButton>
          </TaskInput>
        </ProjectTask>
        <TaskLabel>Add task to project</TaskLabel>
        <ProjectSelector onChange={handleSelect}>
          {projects.map((project) => {
            return (
              <ProjectOption
                style={{ backgroundColor: `${project.color}` }}
                key={project.id}
                value={project.id}
                placeholder="Choose project.."
              >
                {project.name}
              </ProjectOption>
            );
          })}
        </ProjectSelector>
      </CardBody>
    </CardWrapper>
  );
}

export default CreateTask;
