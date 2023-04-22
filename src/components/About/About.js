import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About SFPOPOS</h1>
      <img
        src={`${process.env.PUBLIC_URL}/images/sanfrancisco.jpeg`}
        width="300"
        height="300"
        alt="Hello"
        className="about__img"
      />
      <p>
        POPOS are publicly accessible spaces in forms of plazas, terraces, atriums, small parks, and
        even snippets which are provided and maintained by private developers. In San Francisco,
        POPOS mostly appear in the Downtown office district area.
      </p>
    </div>
  );
}

export default About;
