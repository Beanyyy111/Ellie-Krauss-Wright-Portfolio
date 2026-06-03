import { createBrowserRouter } from "react-router";
import { Portfolio } from "./components/Portfolio";
import { ProjectDetail } from "./components/ProjectDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
  {
    path: "/project/:id",
    Component: ProjectDetail,
  },
]);
