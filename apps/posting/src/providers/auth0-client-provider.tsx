import { Auth0Client } from "@auth0/auth0-spa-js";
import React from "react";

export const Auth0ClientContext = React.createContext<Auth0Client | null>(null);

export const Auth0ClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || "";
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || "";
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL || "";

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
