import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import Header from './components/header/header.js';
import About from './components/about/about.js';
import Contact from './components/contact/contact.js';
import Experience from './components/experience/experience.js';
import Projects from './components/projects/projects.js';


export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>

  )
}
