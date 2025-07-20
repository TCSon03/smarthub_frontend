import HomePage from "../pages/clients/Home/HomePage";
import ShopPage from "../pages/clients/Product/ShopPage";

const clientRouter = [
  { path: "/", element: <HomePage /> },
  { path: "/shop", element: <ShopPage /> },
];

export default clientRouter;
