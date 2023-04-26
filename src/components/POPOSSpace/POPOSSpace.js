import React from 'react';
import './POPOSSpace.css';
import { Link } from 'react-router-dom';

function POPOSSpace({ name, image, address, hours, id }) {
  return (
    <article className="POPOSSpace" aria-labelledby={`title-of-space-${name}`}>
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          width="300"
          height="300"
          alt={`An exterior view of the ${name}`}
          className="POPOSSpace-img"
        />
      </Link>
      <Link className="POPOSSpace-title" to={`/details/${id}`} aria-hidden="true">
        <h1 id={`title-of-space-${name}`}>{name}</h1>
      </Link>

      <div className="POPOSSpace-info">
        <address>{address}</address>
        <div className="hours">{hours}</div>
      </div>
    </article>
  );
}

export default POPOSSpace;
