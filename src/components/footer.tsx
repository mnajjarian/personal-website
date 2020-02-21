import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <section className="footer__section">
      <ul className="footer__section__link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </ul>
    </section>
    <section className="footer__section">
      <ul className="footer__section__list">
        <li className="footer__section__items">
          <a
            className="footer__section__link"
            href="https://www.linkedin.com/in/maryam-tavakoli/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={require("../assets/icons/linkedin-2.svg")} alt="icon" />
          </a>
        </li>
        <li className="footer__section__items">
          <a
            className="footer__section__link"
            href="https://www.facebook.com/maryam.tavakkoli.39566"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={require("../assets/icons/facebook-2.svg")} alt="icon" />
          </a>
        </li>
        <li className="footer__section__items">
          <a
            className="footer__section__link"
            href="https://www.facebook.com/maryam.tavakkoli.39566"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={require("../assets/icons/instagram-2.svg")} alt="icon" />
          </a>
        </li>
      </ul>
    </section>
    <div className="footer__subtitle">
      site by{" "}
      <a
        className="footer__subtitle__link"
        href="https://github.com/mnajjarian"
        rel="noopener noreferrer"
        target="_blank"
      >
        mahdi najjarian
      </a>
    </div>
  </div>
);

export default Footer;
