import React from 'react';
import '../styles/MemesPage.css';

import windowImage from '../assets/window.JPG'
import footballImage from '../assets/football.JPG'
import harryImage from '../assets/harry.JPG'
import olympicsImage from '../assets/olympics.JPG'
import catImage from '../assets/cat.webp'
import saladImage from '../assets/salad.jpg'
import bratImage from '../assets/brat.webp'

const memes = [
  windowImage,
  footballImage,
  harryImage,
  olympicsImage,
  catImage,
  saladImage,
  bratImage
];

const MemesPage = () => {
  return (
    <div className="memes-page">
      <h1>Memes</h1>
      <div className="memes-grid">
        {memes.map((meme, index) => (
          <div key={index} className="meme-item">
            <img src={meme} alt={`Meme ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemesPage;
