import {generatePictures} from './thumbnailService.js';
import {openBigPicture} from './fullPicture.js';
import * as constants from './const.js';


const renderGallery = (pictures) => {
  constants.similarListElement.addEventListener('click', (evt) => {
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

  generatePictures(pictures, constants.similarListElement);
};

export { renderGallery };

