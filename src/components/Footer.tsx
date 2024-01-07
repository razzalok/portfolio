import React from "react";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <div className="nav-items">About</div>
            </li>
            <li>
              <div className="nav-items">Experience</div>
            </li>
            <li>
              <div className="nav-items">Projects</div>
            </li>
            <li>
              <div className="nav-items">Contact</div>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright © 2023 John Doe. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
