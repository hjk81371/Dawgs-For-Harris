import React from 'react';
import '../styles/Card.css';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="card-container">
      <img src={imageSrc} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;
