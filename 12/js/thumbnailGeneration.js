const similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

/**
 * Создает миниатюру фотографии на основе переданных данных.
 * @param {Object} param0 - Объект с данными фотографии.
 * @param {string} param0.url - URL изображения.
 * @param {string} param0.description - Описание фотографии.
 * @param {number} param0.likes - Количество лайков.
 * @param {Array} param0.comments - Массив с комментариями к фотографии.
 * @param {number} param0.id - Идентификатор фотографии.
 * @returns {HTMLElement} - Сгенерированный элемент миниатюры.
 */
function createThumbnail({ url, description, likes, comments, id }) {
  const pictureElement = similarPictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.thumbnailId = id;

  return pictureElement;
}

//функция генерирации миниатюры фотографий и добавления их в DOM
function generatePictures(pictures, similarListElement) {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.appendChild(thumbnail);
  });

  similarListElement.appendChild(fragment);
}

export { generatePictures };
