
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import PolicyPage from './components/PolicyPage.jsx';
import VotingRegistrationPage from './components/VotingRegistrationPage.jsx';
import MemesPage from './components/MemesPage.jsx';
import Footer from './components/Footer.jsx';

const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/policy' element={<PolicyPage />} />
          <Route path='/vote' element={<VotingRegistrationPage />} />
          <Route path='/memes' element={<MemesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
