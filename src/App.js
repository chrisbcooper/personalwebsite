import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Nav from './components/Parts/Nav';
import Footer from './components/Parts/Footer';
import HomePage from './components/Pages/HomePage';
import ContactMe from './components/Pages/ContactMe';
import Projects from './components/Pages/Projects';
import AboutMe from './components/Pages/AboutMe';

function App() {
  return (
    <div className='body'>
      <Router>
        <Nav />
        <HomePage />
        <hr />
        <AboutMe />
        <hr />
        <Projects />
        <hr />
        <ContactMe />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
