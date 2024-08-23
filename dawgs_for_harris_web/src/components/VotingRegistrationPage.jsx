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

        <div className="voting-card" key={0}>
            <h2>{votingInfo[0].title}</h2>
            <p>{votingInfo[0].description}</p>
            <a href={votingInfo[0].link} className="voting-button" target="_blank" rel="noopener noreferrer">
              {votingInfo[0].buttonText}
            </a>
          </div>

          <div className="voting-card" key={1}>
            <h2>{votingInfo[1].title}</h2>
            <p>{votingInfo[1].description}</p>
            <a href={votingInfo[1].link} className="voting-button" target="_blank" rel="noopener noreferrer">
            {votingInfo[1].buttonText}
            </a>
          </div>

          <div className="voting-card" key={2}>
            <h2>{votingInfo[2].title}</h2>
            <p>{votingInfo[2].description}</p>
            <a href={votingInfo[2].link} className="voting-button" target="_blank" rel="noopener noreferrer">
              {votingInfo[2].buttonText}
            </a> 
            <a href={votingInfo[3].link} className="voting-button" target="_blank" rel="noopener noreferrer">
              {votingInfo[3].buttonText}
            </a>
          </div>

      </div>
    </div>
  );
};

export default VotingRegistrationPage;
