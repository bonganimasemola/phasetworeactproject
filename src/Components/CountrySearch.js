import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CountrySearch.css'; 

function CountrySearch({ countries }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="country-search-container">
      <h2>Search Countries</h2>
      <input
        type="text"
        placeholder="Enter country name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(country => (
          <li key={country.name.common}>
            <Link to={`/country/${country.name.common}`}>{country.name.common}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountrySearch;


