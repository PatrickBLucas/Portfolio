import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaBicycle, FaInstagram } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <span className="header-eyebrow">Operations &amp; Systems Leader</span>
          <h1 className="name">Patrick B. Lucas</h1>
          <p className="header-title">
            ERP Strategy &nbsp;/&nbsp; Procurement Automation &nbsp;/&nbsp; Process Architecture &nbsp;/&nbsp; Full-Stack Tool Builder
          </p>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/patrickblucas/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/PatrickBLucas" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/IMADEATHING2/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://members.onepeloton.com/profile/PatrickBL82" target="_blank" rel="noopener noreferrer" aria-label="Peloton">
            <FaBicycle />
          </a>
          <a href="mailto:patrick.b.lucas@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  );
}
