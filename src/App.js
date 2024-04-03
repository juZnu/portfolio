import React, { useRef } from 'react';
import './App.css';
import Header from './Header/Header';
import AboutMe from './About/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Header refs={{aboutRef, experienceRef, projectsRef, contactRef}} />
      <div>
        <section ref={aboutRef} className="min-h-[calc(100vh-4rem)]"><AboutMe /></section>
        <section ref={experienceRef} className="min-h-[calc(100vh-4rem)]"><Experience /></section>
        <section ref={projectsRef} className="min-h-[calc(100vh-4rem)]"><Projects /></section>
        <section ref={contactRef} className="min-h-[calc(100vh-4rem)]"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
