import { ConnectionType } from "./types";

export async function getConnections(token: string): Promise<ConnectionType[]> {
  try {
    const response = await fetch("http://localhost:4000/connections?_limit=3", {
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
