import React, { FC } from "react";
const profilePic = require("../assets/profile_pic.png");
const linkedin = require("../assets/linkedin.png");
const github = require("../assets/github.png");
const resume = require("../assets/resume/Alok's Resume (2).pdf");
interface scrollfunProps {
  targetRefContact: React.RefObject<HTMLDivElement>;
}
const Profile: FC<scrollfunProps> = ({ targetRefContact }) => {
  const handleClickContact = () => {
    targetRefContact.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
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
                window.open(resume);
              }}
            >
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={handleClickContact}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => {
                window.open("https://www.linkedin.com/in/alok-raj-gaya/");
              }}
            />
            <img
              src={github}
              alt="My Github profile"
              className="icon"
              onClick={() => {
                window.open("https://github.com/razzalok");
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
