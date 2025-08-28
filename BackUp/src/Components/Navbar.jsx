import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse show" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Homepage">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/Page1">
                    Event 1
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/Page2">
                    Event 2
                  </NavLink>
                </li>
                {isLoggedIn && (
                  <li>
                    <NavLink className="dropdown-item" to="/Page3">
                      Event 3
                    </NavLink>
                  </li>
                )}
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;