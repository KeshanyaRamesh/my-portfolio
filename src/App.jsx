import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";


function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={darkMode ? "dark" : "light"}>

<button
  onClick={() => setDarkMode(!darkMode)}
  className="theme-button"
>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>

      <Navbar />

      <Hero
  name="Keshanya"
  role="BSc IT Student | React Developer"
  description="I build modern and responsive web applications using React and JavaScript."
/>

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

   </div>

  );

}


export default App;