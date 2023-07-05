import React from "react";
import DashBoard from "./DashBoard";
import PostManagement from "./PostManagement";
import Setting from "./Setting";

const routes = [
  {
    name:"Dashboard",
    path: "dashboard",
    element: <DashBoard />
  },
  {
    name:"Posts Management",
    path: "posts-management",
    element: <PostManagement />,
  },
  {
    name:"Settings",
    path: "setting",
    element: <Setting />,
  },
];
export default routes;
