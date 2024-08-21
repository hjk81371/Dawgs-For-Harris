import React from 'react';
import '../styles/Home.css';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import AboutPage from './AboutPage';
import stockVoteImage from '../assets/stock-vote.jpg'
import moreInfoImage from '../assets/more-info-stock.jpeg'
import whyVoteImage from '../assets/why-vote-stock.jpg'
import dawgsBlue from '../assets/dawgs-blue.svg'
import letsWin from '../assets/lets-win.jpeg'

const Home = () => {
  return (
    <div className="home-container">
        <img className='splash-image' src={letsWin} />
      <AboutPage />
      <Footer />
    </div>
  );
}

export default Home;
