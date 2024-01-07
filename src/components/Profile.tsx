import React from "react";
const profilePic = require("../assets/profile_pic.png");
const linkedin = require("../assets/linkedin.png");
const github = require("../assets/github.png");

const Profile = () => {
  return (
    <div>
      <section id="profile">
        <div className="section__pic-container">
          <img src={profilePic} alt="Alok Raj" className="profile-pic" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Alok Raj</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => {
                window.open("./assets/resume-example.pdf");
              }}
            >
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => {}}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => {}}
            />
            <img
              src={github}
              alt="My Github profile"
              className="icon"
              onClick={() => {}}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
