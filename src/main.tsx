import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const domain = "dev-gpv24fw4fpbbv8i1.us.auth0.com"; // Replace with your Auth0 Domain
const clientId = "OTDBtPgZIqNBmHuM9yDVR5DN2MYFGn59"; // Replace with your Auth0 Client ID

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
