import './css/styles.css';
import {fetchCountries} from "./fetchCountries.js"


const input = document.getElementById("search-box");
console.log(input);
const DEBOUNCE_DELAY = 300;

// fetchCountries(canada);
function e(wer) {
    fetch(`https://restcountries.com/v2/name/${wer.}`)
}

e(ukr)