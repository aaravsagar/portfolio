import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const textArray = ['ME', 'AARAV SAGAR'];
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = isDeleting ? 30 : 50; // Increased typing and deleting speed
  const pauseDuration = isDeleting ? 500 : 1000; // Pause duration after typing

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = textArray[loopIndex % textArray.length];

      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setDisplayText((prev) => prev + currentWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, loopIndex, textArray, typingSpeed]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', textAlign: 'center', fontFamily: "'Arial', sans-serif" }}>
      <div style={{ position: 'relative', display: 'inline-block', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>
          <span style={{ color: '#000' }}>ABOUT </span>
          <span
            style={{
              color: '#00aced',
              fontFamily: `'Courier New', Courier, monospace`,
              position: 'relative',
              display: 'inline-block',
            }}
          >
            {displayText}
            <span
              style={{
                display: 'inline-block',
                borderRight: '2px solid #000', // Change caret color to black
                animation: 'blink-caret 0.6s step-end infinite',
                marginLeft: '5px',
              }}
            />
          </span>
        </h1>
      </div>

      <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333', textAlign: 'justify' }}>
        I’m <strong>Aarav Sagar</strong>, a 1st-year IT student with a passion for creating random projects. Recently, I launched a new initiative called <strong>GPT Projects</strong>, where I develop exciting projects with the help of <strong>ChatGPT</strong>.  
        <br /><br />
        I also own two startups, <strong>Company ZER0</strong> and <strong>Company ZER0 Digital</strong>, focused on digital marketing and web development. <strong>Company ZER0 Digital</strong>, initially known as <strong>Pixel Byte Virtual</strong>, started as a hobby on <strong>January 8, 2024</strong>. Over the past year, it has grown significantly, despite facing challenges, including the shutdown of <strong>Pixel Byte Esports</strong>, my web app for news, due to high API costs.  
        <br /><br />
        As 2025 begins, I’m gearing up with a fresh portfolio website and am committed to fulfilling all promises made during this journey by <strong>March 25, 2025</strong>. It’s been a rollercoaster year, but I’m excited about the road ahead!
      </p>

      {/* Add the image below the paragraph */}
      <div>
        <img
          src="https://github-readme-stats.vercel.app/api?username=aaravsagar&show_icons=true&theme=dark&hide_border=false"
          alt="Decorative"
          style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }} // You can adjust the style as needed
        />
      </div>

      {/* Inline CSS for Caret Blinking */}
      <style>{`
        @keyframes blink-caret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: #000; /* Change caret color to black */
          }
        }
      `}</style>
    </div>
  );
};

export default AboutSection;
