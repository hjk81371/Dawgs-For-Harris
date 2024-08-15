import React from 'react';
import '../styles/Footer.css';
import dawgsWhite from '../assets/dawgs-white.jpg'
import placeholderImage from '../assets/placeholder.jpg'
import tiktokLogo from '../assets/tik-tok.png'
import instagramLogo from '../assets/instagram.png'
import xLogo from '../assets/twitter-alt.svg'
import { useNavigate } from 'react-router-dom';
import dawgsBlue from '../assets/dawgs-blue.svg'
import ugaLogo from '../assets/ugaLogo.png'




const Footer = () => {

    const navigate = useNavigate();

    const handleTikTokClick = () => {
        window.open("https://www.google.com", "_blank");
    }

    const handleInstagramClick = () => {
        window.open("https://www.google.com", "_blank");
    }

    const handleXClick = () => {
        window.open("https://www.google.com", "_blank");
    }

  return (
    <div className="footer-container">
        <img className='uga-logo' src={ugaLogo} />
        <div className='social-links'>
            <img className='social-logo' src={tiktokLogo} onClick={handleTikTokClick} />
            <img className='social-logo' src={instagramLogo} onClick={handleInstagramClick} />
            <img className='social-logo' src={xLogo} onClick={handleXClick} />
        </div>
        <h3>The University of Georgia Dawgs for Harris</h3>
    </div>
  );
}

export default Footer;
