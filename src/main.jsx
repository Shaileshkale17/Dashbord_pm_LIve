import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Overview from "./components/Overview/Overview.jsx";
import ErrorComp from "./components/ERROR/ErrorComp.jsx";
import Clients from "./pages/Clients/Clients.jsx";
import Notes from "./pages/Notes/Notes.jsx";
import OverviewPage from "./components/Table/OverviewPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComp />,
    children: [
      { path: "/", element: <OverviewPage /> },
      { path: "/Client", element: <Clients/> },
      { path: "/Notes", element: <Notes /> },
     
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
