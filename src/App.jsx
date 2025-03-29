// // import './App.css';
// // import Facecard from './facecard';
// // import About from './about';
// // import Education from './education'; // Assuming you have an Education component
// // import Skills from './skills'; // Assuming you have a Skills component
// // import Projects from './projects'; // Assuming you have a Projects component
// // import Contact from './contact'; // Assuming you have a Contact component
// // import Navbot from './navbot';
// // function App() {
// //     return (
// //         <div className="main-content" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
// //             <Navbot/>
// //             <Facecard />
// //             <About />
// //             <Education />
// //             {/* <Skills /> */}
// //             <Projects />
// //             <Contact />
// //         </div>
// //     );
// // }

// // export default App;
// "use client"

// import { useEffect } from "react"
// import "./App.css"
// import Facecard from "./facecard"
// import About from "./about"
// import Education from "./education"
// import Skills from "./skills"
// import Projects from "./projects"
// import Contact from "./contact"
// import Navbar from "./components/Navbar"
// import BackToTop from "./components/BackToTop"
// import AnimatedBackground from "./components/AnimatedBackground"
// import { motion } from "framer-motion"

// function App() {
//   // Check for saved theme preference
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme")
//     if (savedTheme) {
//       document.body.classList.add(`${savedTheme}-theme`)
//     } else {
//       // Default to dark theme
//       document.body.classList.add("dark-theme")
//     }
//   }, [])

//   return (
//     <div className="main-content">
//       <AnimatedBackground />
//       <Navbar />

//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
//         <Facecard />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <About />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <Education />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <Skills />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <Projects />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <Contact />
//       </motion.div>

//       <BackToTop />
//     </div>
//   )
// }

// export default App

import "./App.css"
import "./styles/theme.css"
import Facecard from "./facecard"
import About from "./about"
import Education from "./education"
import Projects from "./projects"
import Contact from "./contact"
import Navbar from "./components/Navbar"
import BackToTop from "./components/BackToTop"
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
        <Projects />
        <Skills/>
        <Contact />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}

export default App

