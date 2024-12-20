import React, { useRef } from 'react';
import Navbar from '../../components/navbar/Navbar'; // Ensure correct path to Navbar
import HeroSection from '../hero/HeroSection'; // Importing HeroSection component
import AboutSection from '../about/AboutSection'; // Importing the About Section Component
import Projects from '../projects/Projects'; // Importing the Projects component

const Index = () => {
  // Create references for the sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  // Function to scroll to the respective section
  const scrollToSection = (section) => {
    if (section === 'hero') {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'about') {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects') {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} /> {/* Pass scrollToSection to Navbar */}
      <div ref={heroRef}>
        <HeroSection /> {/* Rendering HeroSection */}
      </div>
      <div ref={aboutRef}>
        <AboutSection /> {/* Rendering AboutSection */}
      </div>
      <div ref={projectsRef}>
        <Projects /> {/* Rendering Projects */}
      </div>
      {/* Other components or content can be added here */}
    </div>
  );
};

export default Index;
