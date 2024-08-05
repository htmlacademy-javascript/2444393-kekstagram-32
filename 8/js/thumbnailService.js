const similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createThumbnail = ({url, description, likes, comments, id}) => {
  const pictureElement = similarPictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.thumbnailId = id;

  return pictureElement;
};

const generatePictures = (pictures, similarListElement) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.appendChild(thumbnail);
  });

  similarListElement.appendChild(fragment);
};

export {generatePictures};
