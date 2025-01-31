import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css"; // Import CSS file for styling
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Upper Section */}
      <div className="upper">
        {/* Upper Left - Logo, Tagline, Contact */}
        <div className="upperLeft">
          <div className="logo">SEM</div>
          <p className="tagline">Smart Expense Manager - Track Smarter, Spend Better</p>
          <div className="contact">
            <p>Email: <a href="mailto:contact@sem.com">contact@sem.com</a></p>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Upper Right - Clickable Links using Link */}
        <div className="upperRight">
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="">Dashboard</Link></li>
            <li><Link to="/add-expenses">Add Expenses</Link></li>
            <li><Link to="/under-test">Reports</Link></li>
            <li><Link to="/under-test">About Us</Link></li>
            <li><Link to="/under-test">Contact Us</Link></li>
            <li><Link to="/under-test">Privacy & Policy</Link></li>
            <li><Link to="/under-test">Terms & Conditions</Link></li>
            <li><Link to="/under-test">Help & Support</Link></li>
            <li><Link to="/under-test">FAQ</Link></li>
          </ul>
        </div>
      </div>

      {/* Lower Section - Copyright */}
      <div className="lower">
        <p>© 2025 SEM. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
