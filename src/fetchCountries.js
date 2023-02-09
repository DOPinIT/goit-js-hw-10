export function fetchCountries(e) {
  return  fetch(`https://restcountries.com/v3.1/name/${e}`).then((response) =>
       response.json()
    );
};


