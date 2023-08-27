import { onLoad } from './helpers/onLoad';
import { onSearch } from './onSearch';

// отримую HTML елементи
const form = document.querySelector('#search-form');

// вішаємо прослуховувач подій на форму
form.addEventListener('submit', onSearch);
