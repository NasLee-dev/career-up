import { ConnectionType, MyNetworkType } from "./types";

export async function getMyNetwork(token: string): Promise<MyNetworkType> {
  try {
    const response = await fetch("http://localhost:4000/my-network", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch My Network data");
  }
}

export async function getConnections(token: string): Promise<ConnectionType[]> {
  try {
    const response = await fetch("http://localhost:4000/connections", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Connections data");
  }
}