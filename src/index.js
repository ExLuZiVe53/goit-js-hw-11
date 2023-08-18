// import { onLoad } from './helpers/onLoad';
import { onSearch } from './onSearch';

// отримую HTML елементи
const form = document.querySelector('#search-form');

// вішаю слухач на форму
form.addEventListener('submit', onSearch);
