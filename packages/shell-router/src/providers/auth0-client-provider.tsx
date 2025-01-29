import { Auth0Client } from "@auth0/auth0-spa-js";
import React from "react";

export const Auth0ClientContext = React.createContext<Auth0Client | null>(null);

type Auth0ClientProviderProps = React.PropsWithChildren<{
  options: {
    domain: string;
    clientId: string;
    redirectUri: string;
  };
}>;

export const Auth0ClientProvider: React.FC<Auth0ClientProviderProps> = ({
  children,
  options: { domain, clientId, redirectUri },
}) => {
  const auth0Client = new Auth0Client({
    domain,
    clientId,
    authorizationParams: {
      redirect_uri: redirectUri,
    },
  });
  return (
    <Auth0ClientContext.Provider value={auth0Client}>
      {children}
    </Auth0ClientContext.Provider>
  );
};
