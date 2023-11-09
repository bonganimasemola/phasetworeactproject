import React from 'react';
import '../Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="social-media">
        <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </Link>
        <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </Link>
        <a href="mailto:your@email.com">
          <i className="bi bi-envelope"></i>
        </a>
        <Link to="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </Link>
      </div>
    </footer>
  );
}

