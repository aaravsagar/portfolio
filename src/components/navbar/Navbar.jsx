import React, { useState } from 'react';
import { Menu, X, Gitlab, Instagram, Twitter, Linkedin } from 'lucide-react';

const Navbar = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (section) => {
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
          backgroundColor: 'white',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          position: 'fixed',
          width: '100%',
          zIndex: 1000,
        }}
      >
        {/* Hamburger Menu Icon */}
        <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Centered Name */}
        <h1
          style={{
            margin: 0,
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            flex: 1,
            color: '#333',
            opacity: menuOpen ? 0 : 1,
            transition: 'opacity 0.3s ease',
          }}
        >
          AARAV SAGAR
        </h1>
      </div>

      {/* Dropdown Menu */}
      <div
        style={{
          position: 'fixed',
          top: menuOpen ? '50px' : '-100%',
          left: '50%',
          transform: 'translateX(-50%)',
          transition: 'top 0.4s ease',
          backgroundColor: 'white',
          width: '90%', // Adjusted for smaller screens
          maxWidth: '500px', // Limit maximum width
          height: 'auto', // Let height adjust dynamically
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
          borderRadius: '10px',
          padding: '20px',
          zIndex: 1001,
          textAlign: 'center',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li
            onClick={() => handleLinkClick('hero')}
            style={{
              padding: '10px',
              borderBottom: '1px solid #ddd',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Home
          </li>
          <li
            onClick={() => handleLinkClick('about')}
            style={{
              padding: '10px',
              borderBottom: '1px solid #ddd',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            About Me
          </li>
          <li
            onClick={() => handleLinkClick('projects')}
            style={{
              padding: '10px',
              borderBottom: '1px solid #ddd',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Projects
          </li>
          <li
            style={{
              padding: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            Contact
          </li>
        </ul>

        {/* Social Icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
            gap: '15px',
            flexWrap: 'wrap', // Allow wrapping for smaller screens
          }}
        >
          <a href="https://github.com/aaravsagar" target="_blank" rel="noopener noreferrer">
            <Gitlab size={24} color="#333" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} color="#333" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={24} color="#333" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} color="#333" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
