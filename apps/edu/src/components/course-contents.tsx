import React from "react";
import { CourseContentsWrapper } from "./course-contents.styles";

interface CourseContentsProps {
  id: number;
  goals: string[];
  summaries: string[];
}

export const CourseContents: React.FC<CourseContentsProps> = ({
  goals,
  summaries,
}) => {
  return (
    <CourseContentsWrapper>
      <div className="edu--course-contents-goal">
        <h3>강의 목표</h3>
        {goals.map((goal, index) => (
          <p key={index}>{goal}</p>
        ))}
      </div>
      <div className="edu--course-contents-summary">
        <h3>강의 요약</h3>
        {summaries.map((summmary, index) => (
          <p key={index}>{summmary}</p>
        ))}
      </div>
    </CourseContentsWrapper>
  );
};
