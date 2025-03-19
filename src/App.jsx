import './App.css';
import Facecard from './facecard';
import About from './about';
import Education from './education'; // Assuming you have an Education component
import Skills from './skills'; // Assuming you have a Skills component
import Projects from './projects'; // Assuming you have a Projects component
import Contact from './contact'; // Assuming you have a Contact component
import Navbot from './navbot';
function App() {
    return (
        <div className="main-content" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbot/>
            <Facecard />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
