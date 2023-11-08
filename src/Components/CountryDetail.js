
import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetail({ countries }) {
  const { id } = useParams();

  const country = countries.find(country => country.name.common === id);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h2>Country Details</h2>
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital || 'N/A'}</p>
      
    </div>
  );
}

export default CountryDetail;
