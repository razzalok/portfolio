import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Aboutus from "./components/Aboutus";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const componentRefAbout = useRef<HTMLDivElement>(null);
  const componentRefExperience = useRef<HTMLDivElement>(null);
  const componentRefProjects = useRef<HTMLDivElement>(null);
  const componentRefContact = useRef<HTMLDivElement>(null);

  return (
    <>
      <Nav
        targetRef={componentRefAbout}
        targetRefExp={componentRefExperience}
        targetRefProject={componentRefProjects}
        targetRefContact={componentRefContact}
      />
      <Profile targetRefContact={componentRefContact} />
      <div ref={componentRefAbout}>
        <Aboutus />
      </div>
      <div ref={componentRefExperience}>
        <Experience />
      </div>
      <div ref={componentRefProjects}>
        <Projects />
      </div>
      <div ref={componentRefContact}>
        <Contact />
      </div>
      <Footer
        targetRef={componentRefAbout}
        targetRefExp={componentRefExperience}
        targetRefProject={componentRefProjects}
        targetRefContact={componentRefContact}
      />
    </>
  );
}

export default App;
