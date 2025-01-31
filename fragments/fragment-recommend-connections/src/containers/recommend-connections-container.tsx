import React, { useCallback, useState } from "react";
import { useAuth0Client } from "@career-up/shell-router";
import { getConnections } from "../apis";
import { ConnectionType } from "../types";
import RecommendConnections from "../components/recommend-connections";

const RecommendConnectionsContainer: React.FC = () => {
  const auth0Client = useAuth0Client();
  const [connections, setConnections] = useState<ConnectionType[]>([]);

  const fetchConnections = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const connections = await getConnections(token);
      setConnections(connections);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch Connections data");
    }
  }, [auth0Client]);

  return (
    <RecommendConnections
      connections={connections}
      fetchConnections={fetchConnections}
    />
  );
};

export default RecommendConnectionsContainer;
