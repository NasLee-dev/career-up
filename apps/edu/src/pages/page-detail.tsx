import { useAtomValue } from "jotai";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { selectAtom } from "jotai/utils";
import { coursesAtom } from "../atoms";
import { CourseDetailItem } from "../components/course-detail-item";
import { CourseContentsType } from "../types";
import { getCourseContents } from "../apis";
import { CourseContents } from "../components/course-contents";
import CourseActions from "../components/course-actions";
import { useAuth0Client } from "@career-up/shell-router";

export const PageDetail: React.FC = () => {
  const { id } = useParams();
  const auth0Client = useAuth0Client();
  const [courseContents, setCourseContents] =
    useState<CourseContentsType | null>(null);

  const course = useAtomValue(
    useMemo(() => {
      return selectAtom(coursesAtom, (courses) =>
        courses.find((course) => course.id === Number(id))
      );
    }, [id])
  );

  useEffect(() => {
    if (course === undefined) return;

    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        const courseContents = await getCourseContents(token, course.id);

        setCourseContents(courseContents);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [auth0Client, course]);

  if (course === undefined) {
    return null;
  }
  return (
    <>
      <CourseDetailItem {...course} />
      {courseContents !== null ? <CourseContents {...courseContents} /> : null}
      <CourseActions />
    </>
  );
};
