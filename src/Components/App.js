import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchCountriesData } from '../api';
import Home from './Home';
import Header from './Header';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';
import CountrySearch from './CountrySearch';
import Footer from './Footer'; 

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountriesData()
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountryList countries={countries} />} />
          <Route path="/country/:id" element={<CountryDetail countries={countries} />} />
          <Route path="/search" element={<CountrySearch countries={countries} />} />
        </Routes>
        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;








