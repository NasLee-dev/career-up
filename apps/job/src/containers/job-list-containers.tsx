import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/create";
import { done, fail, start } from "../redux/modules/job";
import { getJobs } from "../apis";
import JobList from "../components/job-list";
import { useAuth0Client } from "@career-up/shell-router";

const JobListContainer: React.FC = () => {
  const auth0Client = useAuth0Client();
  const dispatch = useDispatch();

  const jobs = useSelector((state: RootState) => state.jobs.data);

  const fetchJobs = useCallback(async () => {
    try {
      dispatch(start());
      const token = await auth0Client.getTokenSilently();
      const jobs = await getJobs(token);
      dispatch(done(jobs));
    } catch (error) {
      console.error(error);
      dispatch(fail(error));
    }
  }, [auth0Client, dispatch]);

  return <JobList jobs={jobs} fetchJobs={fetchJobs} />;
};

export default JobListContainer;
