import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CountryList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CountryList({ countries }) {
  const countriesPerPage = 30;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * countriesPerPage;
  const endIndex = startIndex + countriesPerPage;

  const currentCountries = countries.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="country-list">
      <h2>All Countries</h2>
      <div className="country-card-container">
        {currentCountries.map((country, index) => (
          <div className="country-card" key={country.name.common}>
            <img src={country.flags.png} alt={country.name.common} className="country-flag" />
            <div className="country-details">
              <Link to={`/country/${country.name.common}`}>{country.name.common}</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-container">
        {Array.from({ length: Math.ceil(countries.length / countriesPerPage) }, (_, index) => (
          <button
            type="button" 
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`btn ${currentPage === index + 1 ? 'btn-outline-secondary' : 'btn-outline-primary'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CountryList;






