import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import lodash from "lodash.debounce"
import {fetchCountries} from "./fetchCountries.js"



const input = document.getElementById("search-box");
const div = document.querySelector(".country-info");
const ul = document.querySelector(".country-list");
console.log(div);
console.log(input);
const DEBOUNCE_DELAY = 300;

input.addEventListener("input", lodash(inputFetchCountries, DEBOUNCE_DELAY))

function inputFetchCountries({target}) {
  const input = target.value.trim();
  console.log(input);
  fetchCountries(input).then((ar) => {console.log(ar[0]);
    if (ar.length > 10)
        throw new Error(Notify.info("Too many matches found. Please enter a more specific name."));
       return ar.reduce((markup, ar) => createMarkup(ar) + markup, 
       "");
}).then(updateCountrys).catch(error => { if (error !== 0) {
    return Notify.failure("Oops, there is no country with that name")   
}
}).finally(countryCard)
}

function createMarkup({name, flags}) {
return`
<li class = "liCountry"><img src="${flags.svg}" width = "40" height="20"></img>
<h2 class = "ulName">${name.official}</h2></li>`
}

function updateCountrys(markup) {
  if (markup === "") {
    input.innerHTML = "";
  }
  ul.innerHTML = markup;
}

function countryCard({name, capital, population, flags, languages}) {
  return div.innerHTML = `<div><img src = "${flags.svg}"></img><h1>${name.official}</h1></div>
  <div><h3>Capital: ${capital}</h3>
  <h3>Population: ${population}</h3>
  <h3>Languages: ${language}</h3></div>`
}