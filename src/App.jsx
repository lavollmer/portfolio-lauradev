import "./App.css";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";


function App() {
  return (
    <>
      <div>
        <Landing />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;