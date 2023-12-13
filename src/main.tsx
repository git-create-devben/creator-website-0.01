import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Gallery from "./gallery/gallery.tsx";
import ErrorPage from "./error.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/Gallery",
    element: <Gallery />,
  },



]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
