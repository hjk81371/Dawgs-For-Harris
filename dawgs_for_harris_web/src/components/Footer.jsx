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
import dawgsTransparent from '../assets/dawgs-transparent.png'
import instagramWhite from '../assets/instagram-white.png'
import tiktokWhite from '../assets/tiktok-white.png'
import xWhite from '../assets/x-white.png'




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
        <img className='uga-logo' src={dawgsTransparent} />
        <div className='social-links'>
            <img className='social-logo' src={tiktokWhite} onClick={handleTikTokClick} />
            <img className='social-logo' src={instagramWhite} onClick={handleInstagramClick} />
            <img className='social-logo' src={xWhite} onClick={handleXClick} />
        </div>
        <h3 className='footer-text'>The University of Georgia Dawgs for Harris</h3>
    </div>
  );
}

export default Footer;
