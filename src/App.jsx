import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Routes/Root";
import Overview from "./pages/Overview";

import ErrorPage from "./pages/ErrorPage";
import CalendarPage from "./pages/CalendarPage";
import Projects from "./components/Projects";
import Tasks from "./components/Tasks";
import CreateCard from "./components/CreateCard";
import CreateTask from "./components/CreateTask";
import { AppProvider } from "./contexts/AppContext";
import TimerPage from "./pages/TimerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: "/",
        element: <Overview />,
        children: [
          {
            path: "/projects",
            element: <Projects />,
            children: [
              {
                path: "/projects/createprojects",
                element: <CreateCard />,
              },
            ],
          },
          {
            path: "/tasks",
            element: <Tasks />,
            children: [
              {
                path: "/tasks/createtask",
                element: <CreateTask />,
              },
            ],
          },
        ],
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/timer",
        element: <TimerPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </div>
  );
}

export default App;
