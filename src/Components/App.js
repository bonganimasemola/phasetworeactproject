
import React, { useState, useEffect } from 'react';
import { fetchCountriesData } from '../api';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [capital, setCapital] = useState('');
  const [flag, setFlag] = useState('');
  const [googleMapsLink, setGoogleMapsLink] = useState('');

  useEffect(() => {
    // Fetch data from the API and populate the countries state
    fetchCountriesData()
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Event handler for selecting a country
  const handleCountrySelect = event => {
    const selectedCountryName = event.target.value;
    const selectedCountry = countries.find(country => country.name.common === selectedCountryName);

    if (selectedCountry) {
      setFlag(selectedCountry.flags.png);
      setCapital(selectedCountry.capital || 'N/A');
      setGoogleMapsLink(`https://www.google.com/maps?q=${selectedCountry.latlng.join(',')}`);
      setSelectedCountry(selectedCountryName);
    } else {
      setFlag('');
      setCapital('N/A');
      setGoogleMapsLink('');
      setSelectedCountry('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>I Am a World Traveller</h1>
        <p>Which countries interest me?</p>

        <select onChange={handleCountrySelect}>
          <option value="">Select a Country</option>
          {countries.map(country => (
            <option key={country.name.common} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>

        <div id="flag-container">
          {flag && <img src={flag} alt={`${selectedCountry} Flag`} className="flag-icon" />}
        </div>

        <div id="info-container">
          <p>Capital: {capital}</p>
          {googleMapsLink && (
            <p>
              Google Maps: <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </a>
            </p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

