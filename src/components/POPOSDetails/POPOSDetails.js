import React from 'react';
import { useParams } from 'react-router';
import data from '../../sfpopos-data.json';
import './POPOSDetails.css';
import POPOSFeatureList from '../POPOSFeatureList/POPOSFeatureList';

function POPOSDetails(props) {
  const params = useParams();
  const { id } = params; // Location index
  const { images, title, desc, hours, features, geo } = data[id];

  return (
    <section className="POPOSDetails" aria-labelledby="popos-details-title">
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title" id="popos-details-title">
          {title}
        </h1>
        <p className="POPOSDetails-desc">{desc}</p>
        <p className="POPOSDetails-hours">{hours}</p>
        <POPOSFeatureList features={features} />
        <p className="POPOSDetails-geo">
          {geo.lat} {geo.lon}
        </p>
      </div>
      <figure className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={`Exterior of ${title}`} />
      </figure>
    </section>
  );
}

export default POPOSDetails;
