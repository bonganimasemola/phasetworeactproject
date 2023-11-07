
const API = 'https://restcountries.com/v3.1/all';


async function fetchCountriesData() {
  try {
    
    const response = await fetch(API);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}


export { fetchCountriesData };
