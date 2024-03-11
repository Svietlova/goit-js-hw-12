'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import {
  renderMarkup,
  showEnd,
  emptyInput,
  noImagesMessage,
} from './js/render-functions';
import { fetchImages } from './js/pixabay-api';

const lightbox = new SimpleLightbox('.gallery a', {
  nav: true,
  captions: true,
  captionsData: 'alt',
  captionDelay: 150,
});

const form = document.querySelector('.search-form');
const container = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-btn');
let searchWord = '';
let currentPage;

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSubmit(event) {
  event.preventDefault();

  currentPage = 1;
  container.innerHTML = '';
  searchWord = form.elements.searchWord.value.trim();
  loadMoreBtn.style.display = 'block';

  if (searchWord === '') {
    emptyInput();
    container.innerHTML = '';
    loadMoreBtn.style.display = 'none';
    form.reset();
    return;
  }
  loader.style.display = 'block';

  try {
    const images = await fetchImages(searchWord, currentPage).then(data => {
      const markup = renderMarkup(data);
      if (data.hits.length === 0) {
        noImagesMessage();
        loadMoreBtn.style.display = 'none';
        loader.style.display = 'none';
        return;
      }
      container.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();
      loader.style.display = 'none';
    });
  } catch (error) {
    console.error('Error:', error);
  }
  form.reset();
}

async function onLoadMore() {
  currentPage += 1;
  try {
    const images = await fetchImages(searchWord, currentPage).then(data => {
      const markup = renderMarkup(data);
      container.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();

      const cardHeight = container.getBoundingClientRect().height;
      window.scrollBy({
        top: 2 * cardHeight,
        behavior: 'smooth',
      });

      if (data.hits.length <= 14) {
        loadMoreBtn.style.display = 'none';
        showEnd();
        lightbox.refresh();
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
};
