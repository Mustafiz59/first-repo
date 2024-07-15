import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout/MainLayout";
import Homepage from "../pages/Homepage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
          {
            path: "/",
            element: <Homepage></Homepage>
          },
        ],
      },
  ]);