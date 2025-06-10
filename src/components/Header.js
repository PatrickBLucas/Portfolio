import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="name">Patrick B. Lucas</h1>
      <div className="contact">
        <p>Email: Patrick.B.Lucas@gmail.com</p>
        <p>Phone: (123) 456-7890</p>
        <p><a href="https://www.linkedin.com/in/patrickblucas/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    </header>
  );
}
