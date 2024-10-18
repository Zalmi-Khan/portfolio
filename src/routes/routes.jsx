import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
const HomePage = lazy(() => import("../pages/home"));
const AboutPage = lazy(() => import("../pages/about"));

export const MainRoutes = () => {
  const routeData = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ];
  return useRoutes(routeData);
};
