import axios from 'axios';
 
export async function fetchImages(searchWord, currentPage) {
  const KEY = '42725994-1a6cd5432fa5183da0eabdd43';
  const URL = 'https://pixabay.com/api/';
  const resp = await axios.get(URL, {
    params: {
      key: KEY,
      q: searchWord,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: 15,
    },
  });

  return resp.data;
};
