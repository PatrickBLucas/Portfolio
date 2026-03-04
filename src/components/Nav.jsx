import React from 'react';
import { FaUser, FaProjectDiagram, FaBriefcase, FaWrench, FaEnvelope } from 'react-icons/fa';

const NAV_ITEMS = [
  { id: 'about',      label: 'About',      icon: <FaUser size={11} /> },
  { id: 'projects',   label: 'Projects',   icon: <FaProjectDiagram size={11} /> },
  { id: 'experience', label: 'Experience', icon: <FaBriefcase size={11} /> },
  { id: 'skills',     label: 'Skills',     icon: <FaWrench size={11} /> },
  { id: 'contact',    label: 'Contact',    icon: <FaEnvelope size={11} /> },
];

export default function Nav({ selected, setSelected }) {
  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`nav-item${selected === item.id ? ' active' : ''}`}
            onClick={() => setSelected(item.id)}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
