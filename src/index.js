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
  fetchCountries(input).then(({...name}) => {
    if (name[0].length >= 10)
        throw new Error(Notify.info("Too many matches found. Please enter a more specific name."));
    name.map({name, flags} => {return `<li><img src="${flags.svg}"></img><h3>${name.official}</h3></li>`})}).catch(Notify.failure("Oops, there is no country with that name"));
}



