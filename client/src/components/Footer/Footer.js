import React from "react";
import { Link } from "react-router-dom"
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div id="links">
          <a
            href="https://www.instagram.com/under.club.oficial/"
            target="_blank"
            rel="noreferrer"
          >
            <h1>INSTAGRAM</h1>
          </a>
          <a
            href="https://www.facebook.com/1derclub"
            target="_blank"
            rel="noreferrer"
          >
            <h1>FACEBOOK</h1>
          </a>
          <a
            href="https://soundcloud.com/under-club"
            target="_blank"
            rel="noreferrer"
          >
            <h1>SOUNDCLOUD</h1>
          </a>
          <a href="https://ra.co/clubs/98071" target="_blank" rel="noreferrer">
            <h1>RESIDENT ADVISOR</h1>
          </a>
          <a
            href="https://www.youtube.com/c/UnderClubOficial"
            target="_blank"
            rel="noreferrer"
          >
            <h1>YOUTUBE</h1>
          </a>
        </div>
        <div id="location-footer">
          <h1>AV. CNEL. NICETO VEGA 5699</h1>
          <h1>1414, BUENOS AIRES</h1>
          <h1>ARGENTINA</h1>
        </div>
        <div></div>
        <div id="link-to-contact">
          <Link to="/contact">
            <a href="/">
              <h1>ESCRIBINOS</h1>
            </a>
          </Link>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
