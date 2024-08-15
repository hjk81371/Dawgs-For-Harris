import React from 'react';
import '../styles/VotingRegistrationPage.css';

const votingInfo = [
  {
    title: 'Register to Vote',
    description:
      'Make your voice heard. Register to vote today and ensure you’re ready for election day. It’s quick, easy, and your civic duty.',
    buttonText: 'Register Now',
    link: 'https://vote.org/register-to-vote/',
  },
  {
    title: 'Check Registration Status',
    description:
      'Already registered? Double-check your voter registration status to make sure your information is up-to-date.',
    buttonText: 'Check Status',
    link: 'https://vote.org/am-i-registered-to-vote/',
  },
  {
    title: 'Find Your Polling Place',
    description:
      'Know where to go on election day. Find your polling place and plan your trip ahead of time.',
    buttonText: 'Find Polling Place',
    link: 'https://vote.org/polling-place-locator/',
  },
  {
    title: 'Early Voting Locations',
    description:
      'Avoid the lines on election day. Locate early voting sites near you and cast your ballot at your convenience.',
    buttonText: 'Locate Early Voting',
    link: 'https://vote.org/early-voting-calendar/',
  },
];

const VotingRegistrationPage = () => {
  return (
    <div className="voting-registration-page">
      <header className="voting-header">
        <h1>Early Voting & Registration</h1>
        <p>Make a difference. Get registered. Vote early.</p>
      </header>
      <div className="voting-options">
        {votingInfo.map((info, index) => (
          <div className="voting-card" key={index}>
            <h2>{info.title}</h2>
            <p>{info.description}</p>
            <a href={info.link} className="voting-button" target="_blank" rel="noopener noreferrer">
              {info.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VotingRegistrationPage;
