import "./App.css"
import "./styles/theme.css"
import Facecard from "./facecard"
import About from "./about"
import Education from "./education"
import Projects from "./projects"
import Contact from "./contact"
import Navbar from "./components/Navbar"

import { ThemeProvider } from "./utils/ThemeContext"
import Skills from "./skills"

function App() {
  return (
    <ThemeProvider>
      <div className="main-content">
        <Navbar />
        <Facecard />
        <About />
        <Education />
        <Skills/>
        <Projects />
        <Contact />
   
      </div>
    </ThemeProvider>
  )
}

export default App

