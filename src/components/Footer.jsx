import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="touch">Get in Touch</h2>
      <ContactForm />
      <div className="footer-center">
        <a href="https://www.digitalobby.com" className="footer-link">
          www.digitalobby.com
        </a>

        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="copyright">© 2024 Digital Lobby. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
