import React, { useState, useEffect } from 'react';
import { Gitlab, Globe } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTwoInFrame, setIsTwoInFrame] = useState(false);

  const projects = [
    {
      id: 0,
      title: 'Portfolio',
      description:
        'This portfolio is part of the GPT Projects series, developed collaboratively with ChatGPT to showcase my work and skills.',
      logo: '/logo.jpg',
      gitlabLink: 'https://gitlab.com/your-gitlab-portfolio',
      siteLink: 'https://your-portfolio-site.com',
    },
    {
      id: 1,
      title: 'Simple Lead Management System',
      description:
        'This is a simple lead management system which I made for my dad for his real estate-related leads management with follow-up features and more.',
      logo: '/app1.jpg',
      gitlabLink: 'https://github.com/aaravsagar/Leads-Management-CRM',
      siteLink: 'https://leads-management-crm.vercel.app',
    },
  ];

  useEffect(() => {
    const updateLayout = () => {
      setIsTwoInFrame(window.innerWidth >= 768);
    };
    window.addEventListener('resize', updateLayout);
    updateLayout();
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      isTwoInFrame
        ? (prevIndex + 2) % projects.length
        : (prevIndex + 1) % projects.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      isTwoInFrame
        ? (prevIndex - 2 + projects.length) % projects.length
        : (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '20px', fontFamily: "'Arial', sans-serif" }}>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
          <span style={{ color: '#000' }}>MY </span>
          <span style={{ color: '#00aced', fontFamily: "'Courier New', Courier, monospace" }}>PROJECTS</span>
        </h1>
      </div>

      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${(currentIndex % projects.length) * (100 / (isTwoInFrame ? 2 : 1))}%)`,
            width: `${projects.length * (100 / (isTwoInFrame ? 2 : 1))}%`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                flex: `0 0 ${isTwoInFrame ? '50%' : '100%'}`,
                maxWidth: `${isTwoInFrame ? '50%' : '100%'}`,
                padding: '20px',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '20px',
                  border: '1px solid #ddd',
                  borderRadius: '15px',
                  boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                  backgroundColor: '#f9f9f9',
                  textAlign: 'center',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                  <a
                    href={project.gitlabLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Gitlab size={24} color="#333" />
                  </a>
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Globe size={24} color="#333" />
                  </a>
                </div>

                <div
                  style={{
                    width: '150px',
                    height: '150px',
                    backgroundImage: `url(${project.logo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '15px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                  }}
                ></div>

                <h3 style={{ fontSize: '24px', margin: '10px 0', color: '#333' }}>{project.title}</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>{project.description}</p>

                {/* Badges */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', flexWrap: 'wrap' }}>
                  <img
                    src="https://img.shields.io/badge/PORTFOLIO-0A0A0A?style=flat&logo=codersrank&logoColor=white"
                    alt="PORTFOLIO Badge"
                    style={{ height: '25px' }}
                  />
                  <img
                    src="https://img.shields.io/badge/GPT%20Projects-0A0A0A?style=flat&logo=openai&logoColor=white"
                    alt="Gpt Badge"
                    style={{ height: '25px' }}
                  />
                  <img
                    src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=Vercel&logoColor=white"
                    alt="Vercel Badge"
                    style={{ height: '25px' }}
                  />
                  <img
                    src="https://img.shields.io/badge/React-20232A?style=flat&logo=React&logoColor=61DAFB"
                    alt="React Badge"
                    style={{ height: '25px' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <button
          onClick={handlePrev}
          style={{
            padding: '10px 20px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          style={{
            padding: '10px 20px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
