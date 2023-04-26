import React, { useState } from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js';

function POPOSList() {
  const [query, setQuery] = useState('');

  const spaces = data
    .filter(
      (obj) =>
        obj.title.toLowerCase().includes(query.toLowerCase()) ||
        obj.address.toLowerCase().includes(query.toLowerCase())
    )
    .map(({ title, address, images, hours, id }) => {
      return (
        <POPOSSpace
          key={`${title}-${id}`}
          name={title}
          address={address}
          id={id}
          image={images[0]}
          hours={hours}
        />
      );
    });

  return (
    <section className="POPOSList">
      <form aria-label="Search public spaces">
        <input
          value={query}
          placeholder="search"
          aria-label="Search text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" aria-label="Submit search">
          Submit!
        </button>
      </form>
      <div role="list" aria-label="List of public spaces">
        {spaces}
      </div>
    </section>
  );
}

export default POPOSList;
