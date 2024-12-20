import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const textArray = ['Developer', 'Founder & CEO', 'Gamer'];
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = isDeleting ? 50 : 80; // Typing and deleting speed
  const pauseDuration = isDeleting ? 500 : 2000; // Pause duration after typing

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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        padding: '0 20px',
      }}
    >
      {/* Logo Section */}
      <img
        src="/logo.jpg"
        alt="Logo"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '20px',
        }}
      />

      {/* Typing Animation Section */}
      <h2
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
          fontFamily: `'Courier New', Courier, monospace`,
          color: '#1E90FF',
          position: 'relative',
          display: 'inline-block',
        }}
      >
        {displayText}
        <span
          style={{
            display: 'inline-block',
            borderRight: '2px solid #1E90FF',
            animation: 'blink-caret 0.6s step-end infinite',
            marginLeft: '5px', // Optional spacing for better visibility
          }}
        />
      </h2>

      {/* Inline CSS for Caret Blinking */}
      <style>{`
        @keyframes blink-caret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: #1E90FF;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
