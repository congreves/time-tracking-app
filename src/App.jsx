import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Routes/Root";
import Overview from "./pages/Overview";
import TimeTake from "./pages/TimeTake";
import ErrorPage from "./pages/ErrorPage";
import CalendarPage from "./pages/CalendarPage";
import Projects from "./components/Projects";
import Tasks from "./components/Tasks";

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
          },
          {
            path: "/tasks",
            element: <Tasks />,
          },
        ],
      },
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/time",
        element: <TimeTake />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
