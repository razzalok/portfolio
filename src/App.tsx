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

  return (
    <>
      <Nav
        targetRef={componentRefAbout}
        targetRefExp={componentRefExperience}
      />
      <Profile />
      <div ref={componentRefAbout}>
        <Aboutus />
      </div>
      <div ref={componentRefExperience}>
        <Experience />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
