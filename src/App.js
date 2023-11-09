import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
import UserContext from './pages/data';
import { Auth0Provider } from '@auth0/auth0-react';
import ModalPage from './pages/ModalPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Auth0Provider
        domain="dev-cloj1evn314asmfy.us.auth0.com"
        clientId="zY8RJBvSH4fsBTh26AiQyuw3EOVCKp60"
        authorizationParams={{ redirect_uri: window.location.origin + "/Sample_react01" }} 
      >
        <BrowserRouter>
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route path="/Sample_React01" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<ContactUs user={user} />} /> 
              <Route path="/modal/:id" element={<ModalPage />} />
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      </Auth0Provider>
    </div>
  );
}

export default App;



