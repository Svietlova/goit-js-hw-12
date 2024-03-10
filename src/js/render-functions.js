export function renderMarkup(data) {
  return data.hits
    .map(
      el =>
        `<div class="gallery-item">
            <a class="gallery-link" href="${el.largeImageURL}">
                <img class="gallery-image" src="${el.webformatURL}" alt="${el.tags}" />
            </a>
            <div class="gallery-item-info">
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Likes: <span>${el.likes}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Views: <span>${el.views}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Comments: <span>${el.comments}</span>
                    </span>    
                </p>
                <p class="gallery-item-info-par">
                    <span class="gallery-item-info-span">Downloads: <span>${el.downloads}</span>
                    </span>    
                </p>
            </div>
        </div>`
    )
    .join('');
}

//
//

// import iziToast from 'izitoast';
// import errorIcon from '../img/error.svg';
// import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { pageNow } from './pixabay-api';
// import { btnLoadClasses } from './pixabay-api';
// const gallery = document.querySelector('.gallery');
// let totalPages = 0;
// export function showResult(result) {
//   totalPages = Math.ceil(result.totalHits / 15);
//   if (result.total === 0) {
//     resetHtml();
//     iziToast.error({
//       iconUrl: errorIcon,
//       iconColor: 'color: #fff',
//       message:
//         '<p>Sorry, there are no images matching</p> <p>your search query. Please try again!</p>',
//       messageColor: '#FAFAFB',
//       messageSize: '16px',
//       position: 'topRight',
//       theme: 'dark',
//       backgroundColor: '#EF4040',
//     });
//   } else if (totalPages === pageNow) {
//     btnLoadClasses.toggle('bnt-isvisible', true);
//     iziToast.error({
//       iconUrl: errorIcon,
//       iconColor: 'color: #fff',
//       message:
//         "<p>We're sorry, but you've reached the end of search results.</p>",
//       messageColor: '#FAFAFB',
//       messageSize: '16px',
//       position: 'topRight',
//       theme: 'dark',
//       backgroundColor: '#EF4040',
//     });
//   } else {
//     const images = result.hits.slice(0, 20);
//     if (pageNow === 1) {
//       resetHtml();
//     }
//     gallery.insertAdjacentHTML(
//       'beforeend',
//       images
//         .map(
//           ({
//             webformatURL,
//             largeImageURL,
//             tags,
//             likes,
//             views,
//             comments,
//             downloads,
//           }) => {
//             return `<div class="container">
//                         <div class="card">
//                             <a class="gallery-link" href="${largeImageURL}">
//                                 <img
//                                 class="image-card"
//                                 src="${webformatURL}"
//                                 alt="${tags}"
//                                 />
//                             </a>
//                             <ul class="list">
//                             <li class="list-item">
//                                 <p class="title">Likes</p>
//                                 <p class="value">${likes}</p>
//                             </li>
//                             <li class="list-item">
//                                 <p class="title">Views</p>
//                                 <p class="value">${views}</p>
//                             </li>
//                             <li class="list-item">
//                                 <p class="title">Comments</p>
//                                 <p class="value">${comments}</p>
//                             </li>
//                             <li class="list-item">
//                                 <p class="title">Downloads</p>
//                                 <p class="value">${downloads}</p>
//                             </li>
//                             </ul>
//                         </div>
//                     </div>`;
//           }
//         )
//         .join('')
//     );
//     if (pageNow > 1) {
//       const scrollHight = gallery.getBoundingClientRect().height;
//       window.scrollBy({
//         top: scrollHight,
//         behavior: 'smooth',
//       });
//     }
//     btnLoadClasses.toggle('bnt-isvisible', false);
//   }
//   const lightbox = new SimpleLightbox('.gallery-link', {
//     captionsData: 'alt',
//     captionDelay: 250,
//     captionPosition: 'bottom',
//   });
//   lightbox.refresh();
//   lightbox.on('shown.simplelightbox', () => {
//     const overlay = document.querySelector('.sl-wrapper');
//     const counter = document.querySelector('.sl-counter');
//     const buttonClose = document.querySelector('.sl-close');
//     const arrowNavigation = document.querySelectorAll(
//       '.sl-wrapper .sl-navigation button'
//     );
//     overlay.style.backgroundColor = 'rgba(46, 47, 66, 0.8)';
//     counter.style.color = '#fff';
//     counter.style.fontFamily = 'Montserrat';
//     counter.style.top = '16px';
//     buttonClose.style.color = '#fff';
//     arrowNavigation.forEach(item => (item.style.color = '#fff'));
//   });
// }
// export function resetHtml() {
//   gallery.innerHTML = '';
//   btnLoadClasses.toggle('bnt-isvisible', true);
// }