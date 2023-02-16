import React from 'react';
import './Footer.css';

function Footer() {
  const date = new Date();

  return (
    <footer>
      <p className="footer-title">&copy;Andrew Pham {`${date.getFullYear()}`}</p>
    </footer>
  );
}

export default Footer;
