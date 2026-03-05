import React, { useState } from 'react';
import { FaUser, FaProjectDiagram, FaBriefcase, FaWrench, FaEnvelope } from 'react-icons/fa';

const NAV_ITEMS = [
  { id: 'about',      label: 'About',      icon: <FaUser size={12} /> },
  { id: 'projects',   label: 'Projects',   icon: <FaProjectDiagram size={12} /> },
  { id: 'experience', label: 'Experience', icon: <FaBriefcase size={12} /> },
  { id: 'skills',     label: 'Skills',     icon: <FaWrench size={12} /> },
  { id: 'contact',    label: 'Contact',    icon: <FaEnvelope size={12} /> },
];

export default function HamburgerMenu({ selected, setSelected }) {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    setSelected(id);
    setOpen(false);
  };

  return (
    <nav className="hamburger-menu">
      <button className="hamburger-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        ☰
      </button>
      {open && (
        <ul className="hamburger-list">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className={selected === item.id ? 'active' : ''}
              onClick={() => handleClick(item.id)}
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}