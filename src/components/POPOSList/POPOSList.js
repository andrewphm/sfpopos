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
    <div className="POPOSList">
      <form>
        <input value={query} placeholder="search" onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Submit!</button>
      </form>
      {spaces}
    </div>
  );
}

export default POPOSList;
