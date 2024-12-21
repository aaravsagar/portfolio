import React from 'react';
import { Gitlab, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
      }}
    >
      {/* Social Icons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '20px',
        }}
      >
        <a href="https://github.com/aaravsagar" target="_blank" rel="noopener noreferrer">
          <Gitlab size={24} color="#333" />
        </a>
        <a href="https://instagram.com/aaravsagar29" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} color="#333" />
        </a>
        <a href="https://twitter.com/aaravsagar6" target="_blank" rel="noopener noreferrer">
          <Twitter size={24} color="#333" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} color="#333" />
        </a>
      </div>

      {/* Email */}
      <p style={{ fontSize: '16px', color: '#333', margin: 0 }}>
        Email: <a href="mailto:aaravsagar29009@gmail.com" style={{ color: '#333', textDecoration: 'none' }}>aaravsagar29009@gmail.com</a>
      </p>

      {/* Copyright Notice */}
      <p style={{ fontSize: '14px', color: '#333', margin: '10px 0 0' }}>
        &copy; Aarav Sagar 2024
      </p>
    </div>
  );
};

export default Footer;
