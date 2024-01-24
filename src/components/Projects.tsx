import React from "react";
const project_1 = require("../assets/project-1.png");
const project_2 = require("../assets/project-2.png");
const project_3 = require("../assets/project-3.png");
const arrow = require("../assets/arrow.png");
const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project_1} alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Meal App</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {
                  window.open("https://github.com/razzalok/Mealapp");
                }}
              >
                Github
              </button>
              {/* <button
                className="btn btn-color-2 project-btn"
                onClick={() => {}}
              >
                Live Demo
              </button> */}
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project_2} alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Project Two</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {}}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {}}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project_3} alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">
              Project Three
            </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {}}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => {}}
              >
                Live Demo
              </button>
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

export default Projects;
