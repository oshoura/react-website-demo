import React from "react";
import Button from "./Button.jsx";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the adventure newseletter to reviebe our best vacarion
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/sign-up">Investor</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/sign-up">Investor</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/sign-up">Investor</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              SHOURA <i className="fas fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights"> SHOURA 2022</small>
          <div className="social-icons">
            <Link
              to="/"
              className="social-icon-link facebook"
              target="_blank"
              arial-lab="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to="/"
              className="social-icon-link facebook"
              target="_blank"
              arial-lab="Facebook"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              to="/"
              className="social-icon-link facebook"
              target="_blank"
              arial-lab="Facebook"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              to="/"
              className="social-icon-link facebook"
              target="_blank"
              arial-lab="Facebook"
            >
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
