import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <h1 id="about-heading">About SFPOPOS</h1>
      <figure>
        <img
          src={`${process.env.PUBLIC_URL}/images/sanfrancisco.jpeg`}
          width="300"
          height="300"
          alt="An aerial view of San Francisco city"
          className="about__img"
        />
      </figure>
      <p>
        POPOS are publicly accessible spaces in forms of plazas, terraces, atriums, small parks, and
        even snippets which are provided and maintained by private developers. In San Francisco,
        POPOS mostly appear in the Downtown office district area.
      </p>
    </section>
  );
}

export default About;
