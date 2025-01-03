import React from "react";
import useAppEvent from "../hooks/use-app-event";
import { Outlet } from "react-router-dom";

interface AppRoutingManagerProps {
  type: string;
}

const AppRoutingManager: React.FC<AppRoutingManagerProps> = ({ type }) => {
  useAppEvent(type);

  return <Outlet />;
};

export default AppRoutingManager;
