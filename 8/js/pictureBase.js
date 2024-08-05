import {generatePictures} from './thumbnailService.js';
import {openBigPicture} from './fullPicture.js';

const similarListElement = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  similarListElement.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) =>item.id === +thumbnail.dataset.thumbnailId
    );

    openBigPicture(picture);
  });

  generatePictures(pictures, similarListElement);
};

export { renderGallery };

