import React from "react";

import { useAtomValue } from "jotai";
import { userAtom } from "../atoms";
import { Profile } from "@career-up/ui-kit";

const ProfileContainer: React.FC = () => {
  const user = useAtomValue(userAtom);
  return <Profile user={user as any} />;
};

export default ProfileContainer;
