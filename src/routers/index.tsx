import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutClient from "../layouts/LayoutClient";
import clientRouter from "./clientRouter";

const router = createBrowserRouter([
  { path: "/", element: <LayoutClient />, children: clientRouter },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
