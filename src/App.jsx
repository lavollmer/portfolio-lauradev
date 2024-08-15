import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="md:p-20 p-6">
        <Navigation />
        <Landing />
        <Skills />
      </div>
      <div>
        <Projects />
        <About />
        <div className="p-20">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
