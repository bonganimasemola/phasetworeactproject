import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';

function Header() {
  return (
    <header>
      <h1>I Am a World Traveller</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/countries">Country List</Link>
        <Link to="/search">Search</Link>
      </nav>
    </header>
  );
}

export default Header;



