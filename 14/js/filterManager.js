import { generatePictures } from './thumbnailGeneration.js';
import { debounce } from './util.js';
import { load } from './api.js';
import * as constants from './selectors.js';
import * as configure from './config.js';

let picturesData = [];

//функция для отображения сообщения об ошибке
function showErrorToUser(message) {
  const errorContainer = document.createElement('div');
  errorContainer.id = 'data-error';
  errorContainer.innerHTML = `<p>${message}</p>`;
  document.body.appendChild(errorContainer);

  setTimeout(() => {
    errorContainer.remove();
  }, 5000);
}

//функция для отображения изображений
function updatePictures() {
  const pictures = constants.picturesContainer.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
  generatePictures(picturesData, constants.picturesContainer);
}

//функция для получения данных с сервера
async function fetchPictures() {
  try {
    const data = await load(configure.Route.GET_DATA, configure.ErrorText.GET_DATA);
    picturesData = data;
    constants.imgFiltersSection.classList.remove('img-filters--inactive');
    updatePictures();
  } catch (error) {
    showErrorToUser(error.message);
  }
}

//функция для получения случайных уникальных фотографий
function getRandomPictures(pictures, count) {
  const shuffled = [...pictures].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

//функция для применения фильтра
function applyFilter(filterType) {
  const filteredPicturesContainer = constants.picturesContainer.querySelectorAll('.picture');
  filteredPicturesContainer.forEach((picture) => picture.remove());

  let filteredPictures;

  switch (filterType) {
    case 'filter-random':
      filteredPictures = getRandomPictures(picturesData, configure.RANDOM_PICTURE_COUNT);
      break;
    case 'filter-discussed':
      filteredPictures = [...picturesData].sort((a, b) => b.comments.length - a.comments.length);
      break;
    default:
      filteredPictures = [...picturesData];
      break;
  }

  generatePictures(filteredPictures, constants.picturesContainer);
}

//обработчик фильтров с устранением дребезга
const handleFilterChange = debounce((event) => {
  const filterButton = event.target.closest('.img-filters__button');

  if (filterButton) {
    const filterType = filterButton.id;

    applyFilter(filterType);

    constants.imgFiltersForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    filterButton.classList.add('img-filters__button--active');
  }
});

constants.imgFiltersForm.addEventListener('click', handleFilterChange);

fetchPictures();
