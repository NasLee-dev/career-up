import { useContext } from "react";
import { type Auth0Client } from "@auth0/auth0-spa-js";
import { Auth0ClientContext } from "../providers/auth0-client-provider";

export const useAuth0Client = (): Auth0Client => {
  const auth0Client = useContext(Auth0ClientContext);

  if (!auth0Client) {
    throw new Error(
      "useAuth0Client must be used within an Auth0ClientProvider"
    );
  }
  return auth0Client;
};
