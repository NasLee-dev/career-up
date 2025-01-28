import React, { useEffect } from "react";
import { JobType } from "../types";
import { JobListWrapper } from "./job-list.styles";
import JobListItem from "./job-list-item";

interface JobListProps {
  jobs: JobType[];
  fetchJobs: () => Promise<void>;
}

const JobList: React.FC<JobListProps> = ({ jobs, fetchJobs }) => {
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <JobListWrapper>
      <div className="job--job-list-top">
        <div className="job--job-list-title">회원님을 위한 맞춤 채용 공고</div>
        <div className="job--job-list-top-subtitle">
          회원님의 프로필과 검색 기록을 참고함
        </div>
      </div>
      {jobs.map((job) => (
        <JobListItem key={job.id} {...job} />
      ))}
    </JobListWrapper>
  );
};

export default JobList;
