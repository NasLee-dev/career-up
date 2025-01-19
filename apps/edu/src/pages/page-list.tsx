import { useAtomValue } from "jotai";
import React from "react";
import { coursesAtom } from "../atoms";
import { CourseListItem } from "../components/course-list-item";

const PageList: React.FC = () => {
  const courses = useAtomValue(coursesAtom);

  return (
    <>
      {courses.map((course) => (
        <CourseListItem key={course.id} {...course} />
      ))}
    </>
  );
};

export default PageList;
