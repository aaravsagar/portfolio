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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis vel purus accumsan commodo. Curabitur feugiat, nibh quis feugiat suscipit, sem arcu consectetur lectus, nec vehicula sapien velit a libero. Proin blandit vel eros ac aliquam. Vivamus auctor justo sit amet ex malesuada, vel feugiat lorem ultrices. Donec sit amet vehicula tellus.
      </p>

      {/* Add the image below the paragraph */}
      <div>
        <img
          src="https://camo.githubusercontent.com/3caa186d335c2557ab20aa1ea718f2931eb66d7955d5793f9fe3a875e2e05c66/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616172617673616761722673686f775f69636f6e733d74727565267468656d653d6461726b26686964655f626f726465723d66616c7365"
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