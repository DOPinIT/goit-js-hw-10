export function fetchCountries(e) {
  return  fetch(`https://restcountries.com/v3.1/name/${e}?fields=name.official,capital,population,flags.svg,languages`).then((response) =>
       {if (!response.ok) {
        throw new Error(response.status)
       }
    return response.json()
}
    ).then(data => console.log(data));
};


