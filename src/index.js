import { createRoot } from 'react-dom/client'; 
import React from 'react';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-cloj1evn314asmfy.us.auth0.com"
      clientId="zY8RJBvSH4fsBTh26AiQyuw3EOVCKp60"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/home",
      }}
    >
      {children}
    </Auth0Provider>
  );
};

createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </React.StrictMode>
);

