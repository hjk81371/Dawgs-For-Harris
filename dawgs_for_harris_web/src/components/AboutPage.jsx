import React from 'react';
import '../styles/AboutPage.css';

import kamalaAtlanta from '../assets/kamala-atlanta.jpg'

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-section">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Our campaign is built on a foundation of integrity, vision, and commitment to the people. We believe in a brighter future where every citizen has the opportunity to thrive. Through strong leadership and clear policies, we are dedicated to making positive changes in our community, state, and country.
          </p>
          <p>
            We are focused on addressing the issues that matter most to you: healthcare, economic growth, education, and the environment. Together, we can build a future that works for everyone. Join us on this journey as we strive to make a meaningful impact and create a better tomorrow.
          </p>
        </div>
        <div className="about-image">
          <img src={kamalaAtlanta} alt="Kamala Harris" />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
