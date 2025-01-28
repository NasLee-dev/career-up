import { ApplyStatusType, JobType } from "./types";

export async function getJobs(token: string): Promise<JobType[]> {
  try {
    const response = await fetch("http://localhost:4000/jobs", {
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
    const response = await fetch("http://localhost:4000/apply-status", {
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
