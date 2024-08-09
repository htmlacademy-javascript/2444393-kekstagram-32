import { isEscapeKey } from './util.js';
import * as constants from './const.js';

//функция открытия окна редактирования изображений
function onImgUploadInputChange(evt) {
  evt.preventDefault();
  constants.imgUploadOverlay.classList.remove('hidden');
  constants.bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  constants.imgUploadInput.value = '';
}

//функция закрытия окна редактирования изображений
function closeUploadPicture() {
  constants.imgUploadOverlay.classList.add('hidden');
  constants.bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

//функция по срабатыванию клавиш клавиатуры
function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {

    if (document.activeElement !== constants.hashtagsInput && document.activeElement !== constants.descriptionInput) {
      evt.preventDefault();
      closeUploadPicture();
    }
  }
}

//функция закрытия окна редактирования изображений по клику на крестик
function onCancelButtonClick() {
  closeUploadPicture();
}

constants.imgUploadInput.addEventListener('change', onImgUploadInputChange);
constants.imgUploadButtonCancel.addEventListener('click', onCancelButtonClick);
