import "./App.css";
import "./styles/theme.css";
import Facecard from "./facecard";
import About from "./about";
import Education from "./education";
import Projects from "./projects";
import Contact from "./contact";
import Navbar from "./components/Navbar";
import Portfolio from "./bento_landing";
import { ThemeProvider } from "./utils/ThemeContext";
import Skills from "./skills";
import { useEffect, useState } from "react";

export default function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsDesktop(window.innerWidth >= 1215);
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <ThemeProvider>
      <div className="main-content">
        <Navbar />

        {/* ONLY Portfolio is conditional*/}
        {isDesktop && <Portfolio />}

        <Facecard />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}
