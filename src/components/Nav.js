import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar } from './NavStyles';
import { useAuth0 } from '@auth0/auth0-react';

function Nav() {
  const PiNetworkLogo = `${process.env.PUBLIC_URL}/pi.network.png`;
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <NavBar className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-warning nav-light navbar-linear-gradient">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">
            <img
              src={PiNetworkLogo}
              alt="Pi Network Logo"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {isAuthenticated ? (
                <div className="d-flex align-items-center">
                  <p className="text-white mr-3">Hi {user ? user.name : ''}</p>
                  <button className="btn btn-outline-light align-self-center" onClick={() => logout({ returnTo: window.location.origin })}>
                    Logout
                  </button>
                </div>
              ) : (
                <button className="btn btn-outline-light" onClick={() => loginWithRedirect()}>Login</button>
              )}
            </form>
          </div>
        </div>
      </NavBar>
    </div>
  );
}

export default Nav;


