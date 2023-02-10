import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import lodash from "lodash.debounce"
import {fetchCountries} from "./fetchCountries.js"



const input = document.getElementById("search-box");
console.log(input);
const DEBOUNCE_DELAY = 300;

input.addEventListener("input", lodash(inputFetchCountries, DEBOUNCE_DELAY))

function inputFetchCountries({target}) {
    if (target !== "") {
        return fetchCountries(target.value)
    }
}

