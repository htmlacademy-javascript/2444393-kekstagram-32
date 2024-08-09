import {isEscapeKey} from './util.js';
import * as constants from './const.js';

const createComment = ({ avatar, name, message }) => {
  const comment = constants.commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (comments) => {
  constants.commentListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();
  let count = 0;

  const renderMoreComments = () => {
    const remainingComments = comments.slice(count, count + 5);
    remainingComments.forEach((item) => {
      const comment = createComment(item);
      fragment.append(comment);
      count++;
    });

    constants.commentListElement.append(fragment);
    constants.commentElementShownCount.textContent = count;

    if (count >= comments.length) {
      constants.commentLoaderElementButton.classList.add('hidden');
    } else {
      constants.commentLoaderElementButton.classList.remove('hidden');
    }
  };

  renderMoreComments();

  constants.commentLoaderElementButton.removeEventListener('click', renderMoreComments);
  constants.commentLoaderElementButton.addEventListener('click', renderMoreComments);

  constants.commentElementTotalCount.textContent = comments.length;
};

const closeBigPicture = () => {
  constants.bigPictureWindow.classList.add('hidden');
  constants.bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

const onCancelButtonClick = () => {
  closeBigPicture();
};

const renderPictureDetails = ({ url, likes, description }) => {
  constants.bigPictureWindow.querySelector('.big-picture__img img').src = url;
  constants.bigPictureWindow.querySelector('.big-picture__img img').alt = description;
  constants.bigPictureWindow.querySelector('.likes-count').textContent = likes;
  constants.bigPictureWindow.querySelector('.social__caption').textContent = description;
};

const openBigPicture = (data) => {
  constants.bigPictureWindow.classList.remove('hidden');
  constants.bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  renderComments(data.comments);

  if (data.comments.length <= 5) {
    constants.commentLoaderElementButton.classList.add('hidden');
  } else {
    constants.commentLoaderElementButton.classList.remove('hidden');
  }
};

constants.bigPictureCloseElement.addEventListener('click', onCancelButtonClick);

export { openBigPicture };
