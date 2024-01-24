import React from "react";
const checkmark = require("../assets/checkmark.png");
const arrow = require("../assets/arrow.png");

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Tailwind Css</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Bootstrap Css</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>TypeScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>

              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>React JS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>React Redux Toolkit</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>React Native</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Node Js</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Mongo DB</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>My SQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
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

export default Experience;
