import React from 'react';
import '../styles/PolicyPage.css';

import repImage from '../assets/reproductive.jpeg'
import proudImage from '../assets/proud.jpeg'
import walzImage from '../assets/walz.jpeg'
import planeImage from '../assets/plane.jpg'
import fieldImage from '../assets/field.jpg'
import basketballImage from '../assets/basketball.avif'
import speachImage from '../assets/speach.webp'
import waveImage from '../assets/wave.jpeg'
import coupleImage from '../assets/couple.webp'

const PolicyPage = () => {
  return (
    <div className="policy-page">
      <h1>Our Policies</h1>

      <section className="policy-section">
        <img src={proudImage} alt="Economy" className="policy-image" />
        <h2>The Economy</h2>
        <p>
          Harris’s economic proposals include building 3 million new housing units within four years, proposing $40 billion in tax incentives for home builders, and providing up to $25,000 in down payments for first-time homebuyers. She aims to expand the earned income tax credit for lower-income adults without children, ban corporate price gouging in the food industry, raise the minimum wage, and ban hidden fees and surprise charges from banks. Harris’s campaign commits to not raising taxes for people earning less than $400,000 and eliminating taxes on tips for service workers.
        </p>
      </section>

      <section className="policy-section">
        <img src={repImage} alt="Abortion and Reproductive Rights" className="policy-image" />
        <h2>Abortion and Reproductive Rights</h2>
        <p>
          Harris is a staunch advocate for abortion rights, campaigning to codify Roe v. Wade into law and repeal the Hyde Amendment. She has pledged to protect the right to contraception and access to fertility care, though specific proposals are yet to be outlined.
        </p>
      </section>

      <section className="policy-section">
        <img src={walzImage} alt="Child Care" className="policy-image" />
        <h2>Child Care</h2>
        <p>
          Harris proposes expanding the child tax credit, allowing families to receive up to $6,000 during the first year of a new baby’s life. She also aims to revive a credit that gave families $3,600 per child under 5 and $3,000 for older children.
        </p>
      </section>

      <section className="policy-section">
        <img src={planeImage} alt="Voting Rights" className="policy-image" />
        <h2>Voting Rights</h2>
        <p>
          Harris promises to work with Congress to pass the John Lewis Voting Rights Act and the Freedom to Vote Act, which include provisions like expanding automatic voting registration, making Election Day a national holiday, and protecting against voter purges.
        </p>
      </section>

      <section className="policy-section">
        <img src={fieldImage} alt="Health Care" className="policy-image" />
        <h2>Health Care</h2>
        <p>
          Harris aims to lower prescription-drug prices, limit the price of insulin to $35 for all patients, and cap out-of-pocket prescription costs at $2,000 annually. She has also pledged to partner with states to cancel medical debt for millions of Americans.
        </p>
      </section>

      <section className="policy-section">
        <img src={coupleImage} alt="Gun Safety" className="policy-image" />
        <h2>Gun Safety</h2>
        <p>
          Harris supports universal background checks, red-flag laws, and a ban on assault weapons. She has been a leader in gun-safety initiatives, including the launch of a national center to implement red-flag laws and crack down on unlicensed gun dealers.
        </p>
      </section>

      <section className="policy-section">
        <img src={speachImage} alt="Immigration" className="policy-image" />
        <h2>Immigration</h2>
        <p>
          Harris’s immigration policy includes strong border security, an earned pathway to citizenship, increased border-patrol agents, and funding to combat human trafficking. She supports reviving a bipartisan border-security bill that includes measures to expedite asylum claims.
        </p>
      </section>

      <section className="policy-section">
        <img src={waveImage} alt="Criminal Justice" className="policy-image" />
        <h2>Criminal Justice</h2>
        <p>
          Harris has a complex record on criminal justice. She supports alternatives to incarceration for nonviolent crimes and backed legislation to end cash bail and reform policing. As vice-president, she pushed for a federal police-reform bill named after George Floyd.
        </p>
      </section>

      <section className="policy-section">
        <img src={basketballImage} alt="Foreign Policy" className="policy-image" />
        <h2>Foreign Policy</h2>
        <p>
          Harris has expressed concerns over the humanitarian crisis in Gaza, calling for a cease-fire and working with President Biden to end the conflict. Her foreign-policy proposals are still forthcoming.
        </p>
      </section>
    </div>
  );
};

export default PolicyPage;
