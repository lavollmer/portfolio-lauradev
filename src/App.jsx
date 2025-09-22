import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { Element } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";
import { useState, useEffect } from "react";
import Substack from "./components/Substack";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="lg:p-20 md:p-6">
          <Element name="navigation">
            <Navigation theme={theme} toggleTheme={toggleTheme} />
          </Element>
          <div className="p-10 mt-10 md:p-0 md:mt-0">
            <Element name="landing">
              <Landing />
            </Element>
          </div>
        </div>
        <div className="p-10 mt-10 md:p-0 md:mt-0">
          <Element name="skills">
            <Skills />
          </Element>
        </div>
        <div className="md:p-0 md:mt-0">
          <Element name="projects">
            <Projects />
          </Element>
        </div>
        <div className="md:p-0 md:mt-0">
          <Element name="substack">
            <Substack />
          </Element>
        </div>
        <div className="p-10 mt-10 md:p-0 md:mt-0">
          <Element name="about">
            <About />
          </Element>
        </div>
        <div className="p-10 mt-10 md:p-0 md:mt-0">
          <Element name="education">
            <Education />
          </Element>
        </div>
        <div className="p-4 md:mt-0">
          <Element name="contact">
            <Contact />
          </Element>
        </div>
        <ScrollToTop smooth />
        <Footer />
      </div>
    </>
  );
}

export default App;
