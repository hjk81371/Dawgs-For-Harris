import React from 'react';
import '../styles/MemesPage.css';

const memes = [
  { src: 'https://via.placeholder.com/400x400', alt: 'Meme 1' },
  { src: 'https://via.placeholder.com/400x400', alt: 'Meme 2' },
  { src: 'https://via.placeholder.com/400x400', alt: 'Meme 3' },
  { src: 'https://via.placeholder.com/400x400', alt: 'Meme 4' },
  { src: 'https://via.placeholder.com/400x400', alt: 'Meme 5' },
  { src: 'https://via.placeholder.com/400x400', alt: 'Meme 6' },
];

const MemesPage = () => {
  return (
    <div className="memes-page">
      <header className="memes-header">
        <h1>Campaign Memes</h1>
        <p>Because every campaign needs a little humor. Enjoy these memes about our candidate!</p>
      </header>
      <div className="memes-gallery">
        {memes.map((meme, index) => (
          <div className="meme-card" key={index}>
            <img src={meme.src} alt={meme.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemesPage;
