import {isEscapeKey} from './util.js';

const bigPictureWindow = document.querySelector('.big-picture');
const bigPictureCloseElement = document.querySelector('.big-picture__cancel');
const bodyElement = document.querySelector('body');

const commentListElement = bigPictureWindow.querySelector('.social__comments');
const commentLoaderElement = bigPictureWindow.querySelector('.comments-loader');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');

const commentElementShownCount = bigPictureWindow.querySelector('.social__comment-shown-count');
const commentElementTotalCount = bigPictureWindow.querySelector('.social__comment-total-count');


const createComment = ({ avatar, name, message }) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (comments) => {
  commentListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();
  let count = 0;

  const renderMoreComments = () => {
    const remainingComments = comments.slice(count, count + 5);
    remainingComments.forEach((item) => {
      const comment = createComment(item);
      fragment.append(comment);
      count++;
    });

    commentListElement.append(fragment);
    commentElementShownCount.textContent = count;

    if (count >= comments.length) {
      commentLoaderElement.classList.add('hidden');
    } else {
      commentLoaderElement.classList.remove('hidden');
    }
  };

  renderMoreComments();

  commentLoaderElement.removeEventListener('click', renderMoreComments);
  commentLoaderElement.addEventListener('click', renderMoreComments);

  commentElementTotalCount.textContent = comments.length;
};

const closeBigPicture = () => {
  bigPictureWindow.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey) {
    evt.preventDefault();
    closeBigPicture();
  }
}

const onCancelButtonClick = () => {
  closeBigPicture();
};

const renderPictureDetails = ({ url, likes, description }) => {
  bigPictureWindow.querySelector('.big-picture__img img').src = url;
  bigPictureWindow.querySelector('.big-picture__img img').alt = description;
  bigPictureWindow.querySelector('.likes-count').textContent = likes;
  bigPictureWindow.querySelector('.social__caption').textContent = description;
};

const openBigPicture = (data) => {
  bigPictureWindow.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  renderComments(data.comments);

  if (data.comments.length <= 5) {
    commentLoaderElement.classList.add('hidden');
  } else {
    commentLoaderElement.classList.remove('hidden');
  }
};

bigPictureCloseElement.addEventListener('click', onCancelButtonClick);

export { openBigPicture };
