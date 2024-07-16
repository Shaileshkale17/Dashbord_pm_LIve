import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Table from "./components/Table/Table.jsx";
import Overview from "./components/Overview/Overview.jsx";
import ErrorComp from "./components/ERROR/ErrorComp.jsx";
import Direct_Visitors from "./pages/Direct_Visitors/Direct_Visitors.jsx";
import Channel_Visitors from "./pages/Channel_Visitors/Channel_Visitors.jsx";
import Channel_Partners from "./pages/Channel_Partners/Channel_Partners.jsx";
import Project from "./pages/Project/Project.jsx";
import Team from "./pages/Team/Team.jsx";
import Channel_Partners_Overseas from "./pages/Channel_Partners_Overseas/Channel_Partners_Overseas.jsx";
import FormEdit from "./components/EditForm/EditForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComp />,
    children: [
      { path: "/", element: <Overview /> },
      { path: "/Direct_Visitors", element: <Direct_Visitors /> },
      { path: "/Channel_Visitors", element: <Channel_Visitors /> },
      { path: "/Channel_Partners", element: <Channel_Partners /> },
      { path: "/overseas", element: <Channel_Partners_Overseas /> },
      { path: "/Project", element: <Project /> },
      { path: "/Team", element: <Team /> },
      { path: "/Direct_Visitors/:id", element: <FormEdit /> },
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
