import './App.css';
import Header from './Header/Header';
import AboutMe from './About/AboutMe'
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <AboutMe id="about" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
