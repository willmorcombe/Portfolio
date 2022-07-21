import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Intro from './components/intro.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Experience from './components/experience.js';
import Projects from './components/projects.js';


export default function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
