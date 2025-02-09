import { ConnectionType, MyNetworkType } from "./types";

const SERVER_URL = process.env.REACT_APP_SERVER_URL!;

export async function getMyNetwork(token: string): Promise<MyNetworkType> {
  try {
    const response = await fetch(`${SERVER_URL}/my-network`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch My Network data");
  }
}

export async function getConnections(token: string): Promise<ConnectionType[]> {
  try {
    const response = await fetch(`${SERVER_URL}/connections`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Connections data");
  }
}
