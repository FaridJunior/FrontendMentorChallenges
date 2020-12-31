import React from "react";
import logo from "../images/logo.svg";
function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="app logo" />
      </div>
      <nav>
        <ul>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Resources
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
