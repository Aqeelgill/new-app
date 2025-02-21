import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaServicestack,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/images/DigitaLobby-logo.png";
import "../styles/CustomNavbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Brand Logo" />
        </a>
      </div>
      <div className="nav-container">
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <FaHome className="nav-icon" />
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="about" className="nav-link">
              <FaUser className="nav-icon" />
              <span>About</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="contact" className="nav-link">
              <FaEnvelope className="nav-icon" />
              <span>Contact</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="services" className="nav-link">
              <FaServicestack className="nav-icon" />
              <span>Services</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
