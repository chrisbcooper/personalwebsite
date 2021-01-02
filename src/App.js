import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Nav from './components/Nav/Nav';
import ContactMe from './components/Pages/ContactMe';
import Projects from './components/Projects/Projects';
import AboutMe from './components/Pages/AboutMe';
import Photo from './components/Pages/Photo.js';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className='body'>
      <Router>
        <Nav />
        <Photo />
        <AboutMe />
        <Experience />
        <Projects />
        <ContactMe />
      </Router>
    </div>
  );
}

export default App;
