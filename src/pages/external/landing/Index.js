import React from "react";
import Landing from "./Landing";
import Services from "./Services";
import Projects from "./Projects";
import About from "./about/About";
import Career from "./career/Career";
import Contact from "./Contact";
import Footer from "./Footer";
const Index = () => {
  return (
    <div className="th-bg-dark m-0 p-0">
      <Landing />
      <Services />
      <Projects />
      <About />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
