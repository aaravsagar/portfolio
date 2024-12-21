import React, { useRef } from 'react';
import Navbar from '../../components/navbar/Navbar'; // Ensure correct path to Navbar
import HeroSection from '../hero/HeroSection'; // Importing HeroSection component
import AboutSection from '../about/AboutSection'; // Importing the About Section Component
import Projects from '../projects/Projects'; // Importing the Projects component
import Footer from '../../components/footer/Footer'; // Import Footer component (adjust path as needed)
import ContactForm from '../contact/ContactForm'; // Import the ContactForm component

const Index = () => {
  // Create references for the sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null); // Create reference for contact form section

  // Function to scroll to the respective section
  const scrollToSection = (section) => {
    if (section === 'hero') {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'about') {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects') {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact') {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflowX: 'hidden', // Prevent horizontal scrolling
      }}
    >
      <Navbar scrollToSection={scrollToSection} /> {/* Pass scrollToSection to Navbar */}
      <div
        ref={heroRef}
        style={{
          padding: '20px',
          textAlign: 'center',
          minHeight: '100vh', // Full screen height
          backgroundColor: '#ffffff', // Set background color to white
        }}
      >
        <HeroSection />
      </div>
      <div
        ref={aboutRef}
        style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#ffffff', // Set background color to white
          minHeight: '100vh',
        }}
      >
        <AboutSection />
      </div>
      <div
        ref={projectsRef}
        style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#ffffff', // Set background color to white
          minHeight: '100vh',
        }}
      >
        <Projects />
      </div>
      {/* Add ContactForm Section */}
      <div
        ref={contactRef}
        style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#ffffff', // Set background color to white
          minHeight: '100vh',
        }}
      >
        <ContactForm /> {/* Render ContactForm component */}
      </div>
      {/* Add Footer at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default Index;
