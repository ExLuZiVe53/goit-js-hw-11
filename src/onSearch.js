import { fetchPictures } from './helpers/fetchPictures';
import { createCards } from './helpers/createCards';
import { onLoad } from './helpers/onLoad';
import { Notify } from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import { observer } from './helpers/observer';
const galleryContainer = document.querySelector('.gallery');
const target = document.querySelector('.js-guard');

let gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
function onSearch(evt) {
  // скидую рандомні налаштуваня
  evt.preventDefault();
  const { searchQuery } = evt.currentTarget.elements;

  fetchPictures(searchQuery.value)
    .then(datas => {
      const { hits, totalHits, total } = datas.data;
      // console.log(hits.length);
      // нотифікашка для неправильного вводу
      if (!hits.length) {
        return Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        galleryContainer.innerHTML = createCards(datas.data.hits);
        document.body.backgroundSize = 'contain';
        observer.observe(target);
        gallery.refresh();
        Notify.info(`Hooray! We found ${totalHits} images.`);
        // плавний скрол
        const { height: cardHeight } = document
          .querySelector('.gallery')
          .firstElementChild.getBoundingClientRect();

        window.scrollBy({
          top: cardHeight * 2,
          behavior: 'smooth',
        });
      }
      // нотифікашка  кінця завантаження картинок
      if (total === hits.length) {
        console.log(hits.length);
        observer.unobserve(target);
        return Notify.failure(
          "We're sorry, but you've reached the end of search results."
        );
      }
    })
    .catch(err => console.log(err));
}
export { onSearch };

// Перевірка на останню сторінку
// try {
//   const data = await fetchPictures(searchQuery, currentPage);

//   if (currentPage === 1) {
//     Notiflix.Notify.success(`Hooray! We found ${data.data.totalHits} images.`);
//   }
//   if (
//     currentPage === Math.floor(data.data.totalHits / Per_page) ||
//     data.data.hits.length < 40
//   ) {
//     observer.unobserve(target);
//     spanEl.textContent =
//       "We're sorry, but you've reached the end of search results.";
//   }
//   currentPage += 1;
//   addMarkup(galleryEL, createMarkup(data.data.hits));
//   lightbox.refresh();
// } catch (err) {
//   Notiflix.Report.failure(
//     'Error',
//     'Sorry, there are no images matching your search query. Please try again',
//     'ok'
//   );
// }
