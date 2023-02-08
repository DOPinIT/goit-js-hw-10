export function fetchCountries(name) {
    fetch(`https://restcountries.com/v2/name/${name}`).then(response => {
        return response.json();
    })
}