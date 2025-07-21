import HomePage from "../pages/clients/Home/HomePage";
import ProductPage from "../pages/clients/Product/ProductPage";

const clientRouter = [
  { path: "/", element: <HomePage /> },
  { path: "/product", element: <ProductPage /> },
];

export default clientRouter;
