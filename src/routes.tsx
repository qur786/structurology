import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { ProjectsPage } from "./pages/ProjectsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <ProjectsPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);
