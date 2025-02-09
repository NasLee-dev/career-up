import { ApplyStatusType, JobType } from "./types";

const SERVER_URL = process.env.REACT_APP_SERVER_URL!;

export async function getJobs(token: string): Promise<JobType[]> {
  try {
    const response = await fetch(`${SERVER_URL}/jobs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch jobs");
  }
}

export async function getApplyStatus(token: string): Promise<ApplyStatusType> {
  try {
    const response = await fetch(`${SERVER_URL}/apply-status`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch apply status");
  }
}
