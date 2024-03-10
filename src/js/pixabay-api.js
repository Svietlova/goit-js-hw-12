import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const KEY = '42725994-1a6cd5432fa5183da0eabdd43';
const URL = 'https://pixabay.com/api/';
const loader = document.querySelector('.loader');

export function fetchImages(searchWord) {
  const searchParamObj = {
    key: KEY,
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  const searchParams = new URLSearchParams(searchParamObj);

  loader.style.display = 'block';

  return fetch(`${URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      loader.style.display = 'none';

      if (data.hits.length === 0) {
        iziToast.error({
          timeout: 3000,
          position: 'topRight',
          message:
            'There are no images matching your search query. Please, enter something else!',
        });
      }
      return data;
    })
    .catch(error => {
      console.error('Error fetching data!', error);
    });
}

//
//

// import axios from 'axios';
// import { showResult } from './render-functions';
// import { resetHtml } from './render-functions';
// const API_KEY = '42515618-500ad6d8e1f921b5ea984b145';
// const spanIsVisible = document.querySelector('.isVisible');
// const loaderClasses = spanIsVisible.classList;
// const btnIsVisible = document.querySelector('.bnt-isvisible');
// export const btnLoadClasses = btnIsVisible.classList;
// export let pageNow = 1;
// export function resetCountPages() {
//   pageNow = 1;
// }
// export function countPages() {
//   pageNow++;
// }
// export function getImages(name) {
//   loaderClasses.toggle('isVisible', false);
//   btnLoadClasses.toggle('bnt-isvisible', true);
//   const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
//     name
//   )}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${pageNow}`;
//   const fetch = async () => {
//     const response = await axios.get(URL);
//     loaderClasses.toggle('isVisible', true);
//     btnLoadClasses.toggle('bnt-isvisible', false);
//     return response.data;
//   };
//   fetch()
//     .then(result => showResult(result))
//     .catch(error => {
//       console.log(error);
//       resetHtml();
//     });
// }