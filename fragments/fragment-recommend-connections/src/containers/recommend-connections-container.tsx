import React from "react";
import { useAuth0Client } from "@career-up/shell-router";
import { ConnectionType } from "../types";
import RecommendConnections from "../components/recommend-connections";
import useSWR from "swr";

const SERVER_URL = "http://localhost:4000";

const RecommendConnectionsContainer: React.FC = () => {
  console.log(SERVER_URL);
  const auth0Client = useAuth0Client();

  const { data, isLoading, error } = useSWR<ConnectionType[]>(
    "/connections?_limit=3",
    async (url: string) => {
      try {
        const token = await auth0Client.getTokenSilently();
        const response = await fetch(`${SERVER_URL}${url}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      } catch (err) {
        console.error("Failed to fetch connections:", err);
        throw err;
      }
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading connections</div>;
  }

  return <RecommendConnections connections={data ?? []} />;
};

export default RecommendConnectionsContainer;
