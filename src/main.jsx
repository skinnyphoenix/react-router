import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./router/home/index.jsx";
import About from "./router/about/index.jsx";
import Contacts from "./router/contacts/index.jsx";
import Locations from "./router/locations/index.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contacts",
    element: <Contacts />,
  },

  {
    path: "/locations",
    element: <Locations />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
