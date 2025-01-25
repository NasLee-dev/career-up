import React from "react";
import { useRecoilState } from "recoil";
import { useAuth0Client } from "../hooks/use-auth0-client";
import { connectionsAtom } from "../atoms";
import { useCallback } from "react";
import { getConnections } from "../apis";
import Connections from "../components/connections";

const ConnectionsContainer: React.FC = () => {
  const auth0Client = useAuth0Client();
  const [connections, setConnections] = useRecoilState(connectionsAtom);

  const fetchConnections = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const connections = await getConnections(token);
      setConnections(connections);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, []);

  return (
    <Connections
      connections={connections}
      fetchConnections={fetchConnections}
    />
  );
};

export default ConnectionsContainer;
