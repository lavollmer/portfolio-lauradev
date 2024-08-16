import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link, Element } from "react-scroll";

function App() {
  return (
    <>
      <div className="lg:p-20 md:p-6">
        <Element name="navigation">
          <Navigation />
        </Element>
        <div className="p-6 mt-8 md:p-0 md:mt-0">
        <Element name="landing">
          <Landing />
        </Element>
      </div>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="about">
        <About />
      </Element>
      </div>
      <div className="p-6 md:p-20">
      <Element name="contact">
        <Contact />
      </Element>
      </div>
      <Footer />
    </>
  );
}

export default App;
