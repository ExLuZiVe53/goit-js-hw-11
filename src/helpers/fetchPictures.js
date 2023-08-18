import axios from 'axios';

async function fetchPictures(namePic, page = 1) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY_API = '38871249-2eed7f344cf93ec506352b726';

  return await axios.get(
    `${BASE_URL}?key=${KEY_API}&q=${namePic}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${page}`
  );
}
export { fetchPictures };
