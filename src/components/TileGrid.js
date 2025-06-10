import React from 'react';
import './TileGrid.css';

const tiles = [
  { title: "About Me", content: "Learn more about my background" },
  { title: "Projects", content: "See what I've built" },
  { title: "Resume", content: "View my professional experience" },
  { title: "Contact", content: "Get in touch" },
];

export default function TileGrid() {
  return (
    <div className="tile-grid">
      {tiles.map((tile, index) => (
        <div key={index} className="tile">
          <h2>{tile.title}</h2>
          <p>{tile.content}</p>
        </div>
      ))}
    </div>
  );
}
