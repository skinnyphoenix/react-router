import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./router/home/index.jsx";
import About from "./router/about/index.jsx";
import Contacts from "./router/contacts/index.jsx";
import Locations from "./router/locations/index.jsx";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

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

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
