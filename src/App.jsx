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
      <div className="md:p-20 p-6">
        <Navigation />
        <Landing />
      </div>
      <div>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
