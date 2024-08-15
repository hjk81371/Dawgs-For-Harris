import React from 'react';
import '../styles/PolicyPage.css';

const policies = [
  {
    title: 'Healthcare Reform',
    description:
      'Ensuring affordable healthcare for every citizen. Our plan includes expanding Medicare, lowering prescription drug costs, and increasing access to mental health services.',
  },
  {
    title: 'Climate Change',
    description:
      'Taking decisive action on climate change by investing in renewable energy, reducing carbon emissions, and protecting our natural resources for future generations.',
  },
  {
    title: 'Economic Growth',
    description:
      'Building a strong economy that works for everyone. This includes supporting small businesses, creating jobs, and raising the minimum wage.',
  },
  {
    title: 'Education',
    description:
      'Providing quality education for all children by increasing funding for public schools, making college more affordable, and supporting teachers.',
  },
  {
    title: 'National Security',
    description:
      'Keeping our country safe through smart defense policies, strengthening alliances, and addressing emerging threats with diplomacy and innovation.',
  },
];

const PolicyPage = () => {
  return (
    <div className="policy-page">
      <header className="policy-header">
        <h1>Our Policies</h1>
        <p>Clear vision. Strong leadership. Proven results.</p>
      </header>
      <div className="policies">
        {policies.map((policy, index) => (
          <div className="policy-card" key={index}>
            <h2>{policy.title}</h2>
            <p>{policy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyPage;
