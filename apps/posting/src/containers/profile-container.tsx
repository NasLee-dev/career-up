import { useAuth0Client } from "@career-up/shell-router";
import { Profile } from "@career-up/ui-kit";
import React, { useEffect, useState } from "react";
import { getUser } from "../apis";
import { UserType } from "../types";

const ProfileContainer: React.FC = () => {
  const auth0Client = useAuth0Client();
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        const user = await getUser(token);
        setUser(user);
      } catch (error) {
        alert(error);
      }
    })();
  }, [auth0Client]);
  return <Profile user={user as any} />;
};

export default ProfileContainer;
