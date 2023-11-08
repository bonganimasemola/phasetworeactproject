import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchCountriesData } from '../api'; 

import Header from './Header';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';
import CountrySearch from './CountrySearch';

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
      <div className="">
        <Header />

        <Routes>
          <Route path="/" element={<CountryList countries={countries} />} />
          <Route path="/country/:id" element={<CountryDetail countries={countries} />} />
          <Route path="/search" element={<CountrySearch countries={countries} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};


export default App;





