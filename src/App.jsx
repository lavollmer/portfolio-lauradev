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
      <div className="md:p-20 p-6">
        <Element name="navigation">
          <Navigation />
        </Element>
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
      <div className="p-20">
      <Element name="contact">
        <Contact />
      </Element>
      </div>
      <Footer />
    </>
  );
}

export default App;
