import { getData } from './api.js';
import { renderGallery } from './galleryRenderer.js';
import { openBigPicture } from './fullPicture.js';
import { applyFilter } from './effectManager.js';
import { showAlert } from './util.js';
import './formValidationSetup.js';
import './uploadForm.js';
import './scaleManager.js';

// Функция для инициализации галереи
const initGallery = () => {
  getData()
    .then((pictures) => {
      renderGallery(pictures, openBigPicture);
    })
    .catch((error) => {
      showAlert(`Ошибка при загрузке галереи: ${error.message}`);
    });
};

initGallery();
applyFilter();
