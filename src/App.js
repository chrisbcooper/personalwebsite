import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Nav from './components/Parts/Nav';
import Footer from './components/Parts/Footer';
import ContactMe from './components/Pages/ContactMe';
import Projects from './components/Pages/Projects';
import AboutMe from './components/Pages/AboutMe';
import Photo from './components/Pages/Photo.js';

function App() {
  return (
    <div className='body'>
      <Router>
        <Nav />
        <Photo />
        <AboutMe />
        <Projects />
        <ContactMe />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
