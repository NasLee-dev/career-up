import React, { useEffect } from "react";
import { LayoutWrapper } from "./layout.styles";
import { useAuth0Client } from "../hooks/use-auth0-client";
import { coursesAtom, userAtom } from "../atoms";
import { useSetAtom } from "jotai";
import { getCourses, getUser } from "../apis";
import ProfileContainer from "../containers/profile-container";
import MyCourseInfoContainer from "../containers/my-course-info-container";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const auth0Client = useAuth0Client();
  const setUser = useSetAtom(userAtom);
  const setCourses = useSetAtom(coursesAtom);

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        getUser(token).then(setUser);
        getCourses(token).then(setCourses);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [auth0Client, setUser, setCourses]);

  return (
    <LayoutWrapper>
      <div className="edu--layout-left">
        <ProfileContainer />
        <MyCourseInfoContainer />
      </div>
      <div className="edu--layout-center">{children}</div>
    </LayoutWrapper>
  );
};

export default Layout;
