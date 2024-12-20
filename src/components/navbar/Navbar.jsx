import React, { useState } from 'react';
import { Gitlab, Instagram, Twitter, Linkedin, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#fff' : '#333'; // Change body background
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div style={{ display: 'flex', gap: '15px' }}>
        <a href="#about" style={{ color: '#333', textDecoration: 'none' }}>About Me</a>
        <a href="#projects" style={{ color: '#333', textDecoration: 'none' }}>Projects</a>
        <a href="#startups" style={{ color: '#333', textDecoration: 'none' }}>Startups</a>
      </div>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', textAlign: 'center', flexGrow: 1 }}>
        AARAV SAGAR
      </div>
      <div style={{ display: 'flex', gap: '15px', marginLeft: '10px' }}>
        <Gitlab style={{ cursor: 'pointer', color: '#333' }} />
        <Instagram style={{ cursor: 'pointer', color: '#333' }} />
        <Twitter style={{ cursor: 'pointer', color: '#333' }} />
        <Linkedin style={{ cursor: 'pointer', color: '#333' }} />
      </div>
      <button onClick={toggleTheme} style={{ backgroundColor: isDarkMode ? 'lightcoral' : 'transparent', border: 'none', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', padding: '10px', cursor: 'pointer' }}>
        {isDarkMode ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
};

export default Navbar;
