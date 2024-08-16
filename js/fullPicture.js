import { isEscapeKey } from './util.js';
import * as constants from './constans/mainInterfaceConst.js';

const bigPictureImg = constants.bigPictureWindow.querySelector('.big-picture__img img');
const likesCount = constants.bigPictureWindow.querySelector('.likes-count');
const socialCaption = constants.bigPictureWindow.querySelector('.social__caption');

//функция создания элемента комментария на основе переданных данных
function createComment({ avatar, name, message }) {
  const comment = constants.commentElement.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
}

//функция отображает список комментариев и добавляет обработчик загрузки дополнительных комментариев
function renderComments(comments) {
  constants.commentListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();
  let count = 0;

  //функция отображает дополнительные комментарии (порциями по 5 штук)
  function renderMoreComments() {
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
  }

  renderMoreComments();

  constants.commentLoaderElementButton.removeEventListener('click', renderMoreComments);
  constants.commentLoaderElementButton.addEventListener('click', renderMoreComments);

  constants.commentElementTotalCount.textContent = comments.length;
}

//функция закрывает модальное окно с большой фотографией
function closeBigPicture() {
  constants.bigPictureWindow.classList.add('hidden');
  constants.bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

//функция обрабатывает нажатие клавиши, чтобы закрыть модальное окно при нажатии Esc
function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

//функция обрабатывает клик на кнопку закрытия модального окна
function onCancelButtonClick() {
  closeBigPicture();
}

//функция отображает детали выбранной фотографии (изображение, описание и количество лайков)
function renderPictureDetails({ url, likes, description }) {
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  likesCount.textContent = likes;
  socialCaption.textContent = description;
}

//функция открывает модальное окно с большой фотографией и загружает её детали
function openBigPicture(data) {
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
}

constants.bigPictureCloseElement.addEventListener('click', onCancelButtonClick);

export { openBigPicture };

