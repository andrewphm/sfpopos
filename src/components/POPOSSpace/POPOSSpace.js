import React from 'react';
import './POPOSSpace.css';
import { Link } from 'react-router-dom';

function POPOSSpace({ name, image, address, hours, id }) {
  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          width="300"
          height="300"
          alt="Hello"
        />
      </Link>
      <h1>{name}</h1>
      <div>{address}</div>
      <div className="hours">{hours}</div>
    </div>
  );
}

export default POPOSSpace;
