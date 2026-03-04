import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import { useScreenSize } from './useScreenSize';
import HamburgerMenu from './components/HamburgerMenu';
import './theme.css';

function App() {
  const { isMobile } = useScreenSize();
  const [selected, setSelected] = useState('about');

  const renderSection = () => {
    switch (selected) {
      case 'about':      return <AboutMe />;
      case 'projects':   return <Projects />;
      case 'experience': return <Experience />;
      case 'skills':     return <Skills />;
      case 'contact':    return <ContactForm />;
      default:           return <AboutMe />;
    }
  };

  return (
    <div className="App">
      <Header />
      {isMobile
        ? <HamburgerMenu selected={selected} setSelected={setSelected} />
        : <Nav selected={selected} setSelected={setSelected} />
      }
      <div className="main-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
