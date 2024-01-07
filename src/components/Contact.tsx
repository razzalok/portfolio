import React from "react";
const email = require("../assets/email.png");
const linkedin = require("../assets/linkedin.png");
const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <div className="nav-items contact-item">Example@gmail.com</div>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <div className="nav-items contact-item">LinkedIn</div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
