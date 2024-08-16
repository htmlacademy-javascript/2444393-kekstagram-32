import { generatePictures } from './thumbnailGeneration.js';
import { debounce } from './util.js';
import { load } from './api.js';
import * as configure from './config.js';
import * as constants from './constans/mainInterfaceConst.js';
import * as imgFiltersConstants from './constans/imageFiltersConst.js';

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
    imgFiltersConstants.imgFiltersSection.classList.remove('img-filters--inactive');
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

//отложенное примененение фильтра
const handleFilterChange = debounce((filterType) => {
  applyFilter(filterType);
});

//обработчик фильтров с устранением дребезга
function handleFilterButtonClick(event) {
  const filterButton = event.target.closest('.img-filters__button');

  if (filterButton) {
    imgFiltersConstants.imgFiltersForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    filterButton.classList.add('img-filters__button--active');

    handleFilterChange(filterButton.id);
  }
}

imgFiltersConstants.imgFiltersForm.addEventListener('click', handleFilterButtonClick);

fetchPictures();
