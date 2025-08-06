import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeScreen from "../screen/HomeScreen";

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
    ],
  },
]);
export default router;
