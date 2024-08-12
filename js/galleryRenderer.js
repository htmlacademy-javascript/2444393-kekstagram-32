import {generatePictures} from './thumbnailGeneration.js';
import * as constants from './selectors.js';

//функция отображает галерею изображений и добавляет обработчики для открытия большой фотографии.
function renderGallery(pictures, openBigPicture) {
  constants.similarListElement.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );

    openBigPicture(picture);
  });

  generatePictures(pictures, constants.similarListElement);
}

export { renderGallery };
