import React from "react";
const education = require("../assets/education.png");
const profile = require("../assets/profile_pic.png");
const experience = require("../assets/experience.png");
const arrow = require("../assets/arrow.png");

const Aboutus = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={profile} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>
                06+ Months
                <br />
                Frontend Development
              </p>
            </div>
            <div className="details-container">
              <img src={education} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>
                B.Sc. (Information Technology) Bachelors Degree
                <br />
                M.C.A Masters Degree
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Hi there! I'm Alok Raj, a dedicated professional with a Masters in
              Computer Application. My expertise lies in the MERN stack, where
              I've honed my skills in MongoDB, Express.js, React, and Node.js. I
              bring six months of valuable experience as a frontend developer
              specializing in React and React Native. Passionate about crafting
              user-friendly interfaces and leveraging the latest technologies,
              I'm committed to delivering exceptional software solutions that
              seamlessly blend innovation and functionality.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => {}}
      />
    </section>
  );
};

export default Aboutus;
