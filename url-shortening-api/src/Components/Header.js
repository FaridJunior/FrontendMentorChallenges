import React from "react";
import logo from "../images/logo.svg";
import closeIcon from "../images/close-btn.svg";
import openMenuIcon from "../images/open-menu-icon.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="app logo" className="logo" />
        <input type="checkbox" name="toggle-btn" id="toggle-btn" class="toggle-btn" />
        <label for="toggle-btn" class="toggle-btn-label">
          <span class="open-icon">
            <img src={openMenuIcon} alt=" open menu" />
          </span>
          <span class="close-icon">
            <img src={closeIcon} alt="close  menu" />
          </span>
        </label>

        <nav>
          <ul>
            <li className="nav-item">
              <a href="/features" className="nav-link">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="/pricing" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item border-bottom">
              <a href="/resources" className="nav-link">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="/sign-up" className="nav-link btn">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
