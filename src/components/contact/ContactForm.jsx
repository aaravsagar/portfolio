import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const textArray = ["ME", "AARAV SAGAR"];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = isDeleting ? 30 : 50; // Speed of typing/deleting
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff", // White background
        color: "#333", // Dark text color
        padding: "40px 20px",
        maxWidth: "600px",
        margin: "0 auto",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "10px" }}>
          <span style={{ color: "#000" }}>CONTACT </span>
          <span
            style={{
              color: "#00aced",
              fontFamily: `'Courier New', Courier, monospace`,
              position: "relative",
              display: "inline-block",
            }}
          >
            {displayText}
            <span
              style={{
                display: "inline-block",
                borderRight: "2px solid #000",
                animation: "blink-caret 0.6s step-end infinite",
                marginLeft: "5px",
              }}
            />
          </span>
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{
              flex: "1 1 48%",
              padding: "12px",
              border: "2px solid #00aced",
              borderRadius: "5px",
              fontSize: "16px",
              minWidth: "200px",
            }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{
              flex: "1 1 48%",
              padding: "12px",
              border: "2px solid #00aced",
              borderRadius: "5px",
              fontSize: "16px",
              minWidth: "200px",
            }}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            border: "2px solid #00aced",
            borderRadius: "5px",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            border: "2px solid #00aced",
            borderRadius: "5px",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            border: "2px solid #00aced",
            borderRadius: "5px",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{
            width: "100%",
            padding: "12px",
            border: "2px solid #00aced",
            borderRadius: "5px",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#00aced",
            color: "#fff",
            fontSize: "18px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>

      <style>{`
        @media (max-width: 768px) {
          input, textarea {
            font-size: 14px;
          }

          h1 {
            font-size: 28px;
          }

          div {
            padding: 20px 10px;
          }
        }

        @keyframes blink-caret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: #000;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
