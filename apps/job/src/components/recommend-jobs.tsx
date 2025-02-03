import React, { useEffect } from "react";
import { JobType } from "../types";
import { RecommendJobsWrapper } from "./recommend-jobs.styles";
import RecommendJob from "./recommend-job";

interface RecommendJobsProps {
  jobs: JobType[];
  fetchJobs: () => Promise<void>;
}

const RecommendJobs: React.FC<RecommendJobsProps> = ({ jobs, fetchJobs }) => {
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);
  return (
    <RecommendJobsWrapper>
      <div className="job--recommend-jobs-top">
        <span className="job--recommend-jobs-top-title">추천 채용 공고</span>
      </div>
      <div className="job--recommend-jobs-bottom">
        {jobs.map((job) => (
          <RecommendJob key={job.id} {...job} />
        ))}
      </div>
    </RecommendJobsWrapper>
  );
};

export default RecommendJobs;
