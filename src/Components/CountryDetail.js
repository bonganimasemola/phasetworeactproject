import React from 'react';
import { useParams } from 'react-router-dom';
import '../CountryDetail.css'; 

function CountryDetail({ countries }) {
  const { id } = useParams();

  const country = countries.find(country => country.name.common === id);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="country-detail-container">
      <h2>Country Details</h2>
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital || 'N/A'}</p>
      <p>Region: {country.region || 'N/A'}</p>
      <img src={country.flags.png} alt={country.name.common} style={{ maxWidth: '300px' }} />
      <p>Currency Name: {country.currencies[Object.keys(country.currencies)[0]].name || 'N/A'}</p>
      <p>Currency Symbol: {country.currencies[Object.keys(country.currencies)[0]].symbol || 'N/A'}</p>
      {country.latlng && country.latlng.length === 2 && (
   <p>
   <a
     href={`https://www.google.com/maps?q=${country.capital}`}
     target="_blank"
     rel="noopener noreferrer"
   >
     Google Maps Link 
   </a>
 </p>
 
      )}
    </div>
  );
}

export default CountryDetail;


