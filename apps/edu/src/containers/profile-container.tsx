import React from "react";
import Profile from "../components/profile";
import { useAtomValue } from "jotai";
import { userAtom } from "../atoms";

const ProfileContainer: React.FC = () => {
  const user = useAtomValue(userAtom);
  return <Profile user={user} />;
};

export default ProfileContainer;
