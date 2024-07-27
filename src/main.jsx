import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Overview from "./components/Overview/Overview.jsx";
import ErrorComp from "./components/ERROR/ErrorComp.jsx";
import Clients from "./pages/Clients/Clients.jsx";
import Notes from "./pages/Notes/Notes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComp />,
    children: [
      { path: "/", element: <Overview /> },
      { path: "/Client", element: <Clients /> },
      { path: "/My_Team", element: <Notes /> },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
