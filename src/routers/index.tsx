import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutClient from "../layouts/LayoutClient";
import clientRouter from "./clientRouter";
import RegisterPage from "../pages/auth/register/RegisterPage";
import LoginPage from "../pages/auth/login/LoginPage";

const router = createBrowserRouter([
  { path: "/", element: <LayoutClient />, children: clientRouter },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
