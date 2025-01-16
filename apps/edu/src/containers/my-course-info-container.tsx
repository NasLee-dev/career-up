import { useAtomValue } from "jotai";
import React from "react";
import { userAtom } from "../atoms";
import MyCourseInfo from "../components/my-course-info";

const MyCourseInfoContainer = () => {
  const user = useAtomValue(userAtom);

  return <MyCourseInfo user={user} />;
};

export default MyCourseInfoContainer;
