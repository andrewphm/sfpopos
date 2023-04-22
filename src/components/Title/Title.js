import React, { useState } from 'react';
import './title.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';

function Title() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <div className="title">
      <h1>SFPOPOS</h1>
      <div className="title-subtitle">San Franciscos Privately Owned Public Spaces</div>

      <div className={`links ${mobileMenuVisible ? 'mobile-menu-visible' : ''}`}>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')} to="/">
          List
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
          to="/signup"
        >
          Sign Up
        </NavLink>
        <RandomSpace />
      </div>

      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </div>
  );
}

export default Title;
