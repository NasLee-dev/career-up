import React, { useEffect } from "react";
import { LayoutWrapper } from "./layout.styles";
import { useAuth0Client } from "../hooks/use-auth0-client";
import { userAtom } from "../atoms";
import { useSetAtom } from "jotai";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const auth0Client = useAuth0Client();
  const setUser = useSetAtom(userAtom);

  return (
    <LayoutWrapper>
      <div className="edu--layout-left">
        {/* <ProfileContainer />
        <MyCourseInfoContainer /> */}
      </div>
      <div className="edu--layout-center">{children}</div>
    </LayoutWrapper>
  );
};

export default Layout;
