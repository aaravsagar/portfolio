import React from "react";
import { Globe, Gitlab } from "lucide-react";

const Projects = () => {
  const projects = [
    { 
      logo: "logo.jpg", 
      title: "PORTFOLIO", 
      description: "This portfolio is part of the GPT Projects series, developed collaboratively with ChatGPT to showcase my work and skills.",
      gitlabLink: "https://github.com/aaravsagar/portfolio", // GitLab link for Project 1
      globeLink: "https://aaravsagar-portfolio.vercel.app", // Globe link for Project 1
      badges: [
        "https://img.shields.io/badge/PORTFOLIO-0A0A0A?style=flat&logo=codersrank&logoColor=white", 
        "https://img.shields.io/badge/GPT%20Projects-0A0A0A?style=flat&logo=openai&logoColor=white",
        "https://img.shields.io/badge/Vercel-000000?style=flat&logo=Vercel&logoColor=white",
        "https://img.shields.io/badge/React-20232A?style=flat&logo=React&logoColor=61DAFB"
      ], // Badges for Project 1
    },
    { 
      logo: "app1.jpg", 
      title: "SLAM", 
      description: "This is a simple lead management system which I made for my dad for his real estate-related leads management with follow-up features and more.",
      gitlabLink: "https://github.com/aaravsagar/Leads-Management-CRM", // GitLab link for Project 2
      globeLink: "https://leads-management-CRM.vercel.app", // Globe link for Project 2
      badges: [
        "https://img.shields.io/badge/PORTFOLIO-333333?style=flat&logo=codersrank&logoColor=white", 
        "https://img.shields.io/badge/GPT%20Projects-333333?style=flat&logo=openai&logoColor=white",
        "https://img.shields.io/badge/Vercel-333333?style=flat&logo=Vercel&logoColor=white",
        "https://img.shields.io/badge/React-333333?style=flat&logo=React&logoColor=61DAFB"
      ], // Badges for Project 2
    },
    { 
      logo: "app2.png", 
      title: "CALCVERSE", 
      description: "CalcVerse is an Electron app featuring a calculator, unit converter, and real-time currency converter, developed as part of my GPT Projects series.",
      gitlabLink: "https://github.com/aaravsagar/CalcVerse", // GitLab link for CalcVerse
      badges: [
        "https://img.shields.io/badge/CalcVerse-000000?style=flat&logo=codersrank&logoColor=white", 
        "https://img.shields.io/badge/GPT%20Projects-000000?style=flat&logo=openai&logoColor=white",
        "https://img.shields.io/badge/Vercel-000000?style=flat&logo=Vercel&logoColor=white",
        "https://img.shields.io/badge/Electron-000000?style=flat&logo=Electron&logoColor=9FEAF9",
        "https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"
      ], // Badges for CalcVerse
    }
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Title Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontFamily: "'Arial', sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          MY <span style={{ color: "#00aced" }}>PROJECTS</span>
        </h1>
        <p style={{ fontSize: "18px", color: "#555", marginTop: "10px" }}>
          A showcase of my finest projects, crafted using <strong>ChatGPT</strong> as part of my <strong>GPT Projects</strong> initiative.
        </p>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              backgroundColor: "#fff",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            {/* Top Icons */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <a href={project.gitlabLink} target="_blank" rel="noopener noreferrer">
                <Gitlab size={24} color="#333" /> {/* GitLab Icon with link */}
              </a>
              {/* Tooltip for CalcVerse */}
              <a
                href={project.globeLink || "#"}
                target={project.globeLink ? "_blank" : "_self"}
                title={project.globeLink ? "" : "This project is not deployed as a website"}
              >
                <Globe size={24} color="#333" /> {/* Globe Icon with link */}
              </a>
            </div>

            {/* Logo */}
            <img
              src={project.logo}
              alt={`${project.title} Logo`}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />

            {/* Title */}
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: "14px",
                color: "#555",
                marginBottom: "10px",
              }}
            >
              {project.description}
            </p>

            {/* Badges */}
            <div
              style={{
                display: "flex",
                gap: "5px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {project.badges.map((badge, badgeIndex) => (
                <img
                  key={badgeIndex}
                  src={badge}
                  alt={`Badge ${badgeIndex + 1}`}
                  style={{ height: "25px" }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
