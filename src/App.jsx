import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"}>

      {/* Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="theme-button"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero
        name="Keshanya"
        role="BSc IT Undergraduate | Aspiring IT Professional"
        description="I am an Information Technology undergraduate with hands-on experience in web development, software development, databases, and modern technology tools. I enjoy learning new technologies and building practical solutions to real-world problems."
      />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;