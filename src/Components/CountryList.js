import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css'; // Import the CSS file

function Header() {
  return (
    <header>
      <h1>I Am a World Traveller</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </nav>
    </header>
  );
}

export default Header;


