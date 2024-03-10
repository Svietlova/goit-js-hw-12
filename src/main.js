import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { renderMarkup } from './js/render-functions.js';
import { fetchImages } from './js/pixabay-api.js';

const lightbox = new SimpleLightbox('.gallery a', {
  nav: true,
  captions: true,
  captionsData: 'alt',
  captionDelay: 150,
});

const form = document.querySelector('.search-form');
const container = document.querySelector('.gallery');
let searchWord = '';

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  container.innerHTML = '';
  searchWord = form.elements.searchWord.value.trim();

  fetchImages(searchWord)
    .then(data => {
      const markup = renderMarkup(data);
      container.insertAdjacentHTML('beforeend', markup);

      lightbox.refresh();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  form.reset();
}

//
//

// import { getImages } from './js/pixabay-api';
// import { countPages } from './js/pixabay-api';
// import { resetCountPages } from './js/pixabay-api';
// const fetchUsersBtn = document.querySelector('button[data-start]');
// const input = document.querySelector('#data-search');
// const btnLoadMore = document.querySelector('button[data-loadmore]');
// let globalNameImage;
// fetchUsersBtn.addEventListener('click', () => {
//   const nameImage = input.value.trim();
//   resetCountPages();
//   if (nameImage !== '') {
//     getImages(nameImage.trim());
//     globalNameImage = nameImage;
//   }
// });
// btnLoadMore.addEventListener('click', () => {
//   countPages();
//   getImages(globalNameImage);
// });