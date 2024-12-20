import React from 'react';
import { Gitlab, Globe } from 'lucide-react';

const Projects = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: "'Arial', sans-serif" }}>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>
          <span style={{ color: '#000' }}>MY </span>
          <span style={{ color: '#00aced', fontFamily: "'Courier New', Courier, monospace" }}>PROJECTS</span>
        </h1>
      </div>

      {/* GPT Projects Box */}
      <div
        style={{
          padding: '30px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#f9f9f9',
          marginBottom: '20px',
        }}
      >
        {/* GPT Projects Title */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>GPT Projects</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
            These are projects where I collaborate with ChatGPT to develop various applications and tools.
          </p>
        </div>

        {/* Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Portfolio Project */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
              alignItems: 'center',
              backgroundColor: '#fff',
              position: 'relative',
            }}
          >
            {/* Links in Top Right */}
            <div
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                display: 'flex',
                gap: '15px',
              }}
            >
              <a
                href="https://gitlab.com/your-gitlab-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Gitlab size={24} color="#333" />
              </a>
              <a
                href="https://your-portfolio-site.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Globe size={24} color="#333" />
              </a>
            </div>

            {/* Serial Number */}
            <div
              style={{
                flex: '0 0 40px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#555',
                textAlign: 'center',
              }}
            >
              0
            </div>

            {/* Project Logo */}
            <div
              style={{
                flex: '0 0 120px',
                height: '120px',
                backgroundImage: 'url(/logo.jpg)', // Replace with the portfolio logo if available
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              }}
            ></div>

            {/* Project Info */}
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '24px', margin: '0 0 10px', color: '#333' }}>Portfolio</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                This portfolio is part of the GPT Projects series, developed collaboratively with ChatGPT to showcase my work and skills.
              </p>
              {/* Tags */}
              <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
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

          {/* SLMS Project */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
              alignItems: 'center',
              backgroundColor: '#fff',
              position: 'relative',
            }}
          >
            {/* Links in Top Right */}
            <div
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                display: 'flex',
                gap: '15px',
              }}
            >
              <a
                href="https://github.com/aaravsagar/Leads-Management-CRM"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Gitlab size={24} color="#333" />
              </a>
              <a
                href="https://leads-management-crm.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Globe size={24} color="#333" />
              </a>
            </div>

            {/* Serial Number */}
            <div
              style={{
                flex: '0 0 40px',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#555',
                textAlign: 'center',
              }}
            >
              1
            </div>

            {/* Project Logo */}
            <div
              style={{
                flex: '0 0 120px',
                height: '120px',
                backgroundImage: 'url(/app1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              }}
            ></div>

            {/* Project Info */}
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '24px', margin: '0 0 10px', color: '#333' }}>Simple Lead Management System</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                This is a simple lead management system which I made for my dad for his real estate-related leads management with follow-up features and more.
              </p>
              {/* Tags */}
              <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                <img
                  src="https://img.shields.io/badge/CRM-0A0A0A?style=flat&logo=Microsoft-dynamics&logoColor=white"
                  alt="React Badge"
                  style={{ height: '25px' }}
                />
                <img
                  src="https://img.shields.io/badge/GPT%20Projects-0A0A0A?style=flat&logo=openai&logoColor=white"
                  alt="GPT Badge"
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
