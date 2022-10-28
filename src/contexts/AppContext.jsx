import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [timelog, setTimelog] = useState([]);

  // PROJECTS API

  const getProject = async () => {
    const { data } = await axios.get("http://192.168.1.237:3000/projects");
    setProjects(data);
    return data;
  };

  const addProject = async (projectData) => {
    const { data } = await axios.request({
      method: "post",
      url: "http://192.168.1.237:3000/projects",
      data: projectData,
    });
    console.log(data);
    return data;
  };

  const deleteProject = async (id) => {
    await axios.delete(`http://192.168.1.237:3000/projects/${id}`);
    return console.log(`${id} was deleted`);
  };

  // TASKS API

  const getTask = async () => {
    const { data } = await axios.get("http://192.168.1.237:3000/tasks");
    setTasks(data);
    console.log(data);
    console.log(tasks);
    return tasks;
  };

  const addTask = async (taskData) => {
    const { data } = await axios.request({
      method: "post",
      url: "http://192.168.1.237:3000/tasks",
      data: taskData,
    });
    console.log(data);
    return data;
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://192.168.1.237:3000/tasks/${id}`);
    return console.log(`${id} task was deleted`);
  };

  // TIMELOG API

  const getTimelog = async () => {
    const { data } = await axios.get("http://192.168.1.237:3000/timelogs");
    setTimelog(data);
    return data;
  };

  const addTimeLog = async (timeData) => {
    const { data } = await axios.request({
      method: "post",
      url: "http://192.168.1.237:3000/timelogs",
      data: timeData,
    });
    console.log("addTimelog", data);
    return data;
  };

  const deleteTimelog = async (id) => {
    await axios.delete(`192.168.1.237:3000/timelogs/${id}`);
    return console.log(`${id} timelog was deleted`);
  };

  const stopTimelog = async (id, timeData) => {
    console.log("patch", id, timeData);
    const { data } = await axios.request({
      method: "patch",
      url: `http://192.168.1.237:3000/timelogs/${id}`,
      data: timeData,
    });
    console.log(`${id} timelog was stopped`);
    return data;
  };

  useEffect(() => {
    getProject();
    getTask();
    getTimelog();
  }, []);

  return (
    <AppContext.Provider
      value={{
        projects,
        setProjects,
        getProject,
        addProject,
        deleteProject,
        getTask,
        tasks,
        addTask,
        deleteTask,
        addTimeLog,
        deleteTimelog,
        getTimelog,
        timelog,
        stopTimelog,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useProject is outside AppProvider");
  }
  return context;
};
