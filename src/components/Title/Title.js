import React from 'react';
import './title.css';
import { NavLink } from 'react-router-dom';

function Title() {
  return (
    <div className="title">
      <h1>SFPOPOS</h1>
      <div className="title-subtitle">San Franciscos Privately Owned Public Spaces</div>

      <div className="links">
        <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to="/">
          List
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
          to="/about"
        >
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Title;