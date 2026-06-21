import { getImagesByQuery } from './js/pixabay-api.js';
import {
  showLoader,
  hideLoader,
  clearGallery,
  createGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.gallery-load');

let page = 1;
let currentQuery = '';

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();
  if (!query) {
    return;
  }
  currentQuery = query;
  page = 1;
  hideLoadMoreButton();
  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(currentQuery, page);
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(data.hits);
    page++;
    if (page * 15 >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again.',
    });
  } finally {
    hideLoader();
  }
});

loadMoreButton.addEventListener('click', async () => {
  hideLoadMoreButton();
  showLoader();
  try {
    const data = await getImagesByQuery(currentQuery, page);
    if (data.hits.length === 0) {
      hideLoadMoreButton();
      iziToast.error({
        message: 'Something went wrong. Please try again.',
      });
      return;
    }
    createGallery(data.hits);
    page++;
    const image = document.querySelector('.gallery-item');
    const imageHeight = image.getBoundingClientRect().height;

    window.scrollBy({
      top: imageHeight * 2,
      behavior: 'smooth',
    });
    if (page * 15 >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again.',
    });
  } finally {
    hideLoader();
  }
});
