function createCards(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class="photo-card">
          <a class="gallery__link" href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" title=${tags} width="350px" height="250px" loading="lazy" />
            <ul class="info">
              <li class="info-item">
                <p>Likes
                </p> ${likes}
              </li>
              <li class="info-item">
                <p>Views
                </p> ${views}
              </li>
              <li class="info-item">
                <p>Comments
                </p> ${comments}
              </li>
              <li class="info-item">
                <p>Downloads
                </p>${downloads}
              </li>
            </ul>
          </a>
        </div>`
    )
    .join('');
}
export { createCards };
