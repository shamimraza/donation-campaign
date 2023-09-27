import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./componentes/root/Root";
import ErrorElements from "./errorElements/ErrorElements";
import Home from "./componentes/home/Home";
import Donation from "./componentes/Donation/Donation";
import Statistics from "./componentes/Statistics/Statistics";
import Education from "./componentes/DonationEducation/Education";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("/donationData.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/donationData.json"),
      },
      {
        path: "/education/:id",
        element: <Education></Education>,
        loader: () => fetch("/donationData.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
