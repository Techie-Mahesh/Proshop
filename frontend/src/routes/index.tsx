import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeScreen from "../screen/HomeScreen";
import ProductScreen from "../screen/ProductScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/product/:id",
        element: <ProductScreen />,
      },
    ],
  },
]);
export default router;
