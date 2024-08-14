import { isEscapeKey } from './util.js';
import * as constants from './selectors.js';

//функция для показа выбранного изображения в предварительном просмотре
function showPreviewImage(file) {
  const reader = new FileReader();
  reader.onload = function () {
    constants.imagePreview.src = reader.result;
  };
  reader.readAsDataURL(file);
}

//функция для открытия окна редактирования изображения
function onImgUploadInputChange(evt) {
  evt.preventDefault();
  const file = evt.target.files[0];

  if (file && file.type.startsWith('image/')) {
    showPreviewImage(file);
    constants.imgUploadOverlay.classList.remove('hidden');
    constants.bodyElement.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
    constants.imgUploadInput.value = '';
  } else {
    // eslint-disable-next-line no-alert
    alert ('Пожалуйста, выберите изображение.');
  }
}

//функция для закрытия окна редактирования изображения
function closeUploadPicture() {
  constants.imgUploadOverlay.classList.add('hidden');
  constants.bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

//функция для обработки нажатий клавиш на клавиатуре
function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    if (document.activeElement !== constants.hashtagsInput && document.activeElement !== constants.descriptionInput) {
      evt.preventDefault();
      closeUploadPicture();
    }
  }
}

//функция для закрытия окна редактирования по клику на кнопку "Закрыть"
function onCancelButtonClick() {
  closeUploadPicture();
}

constants.imgUploadInput.addEventListener('change', onImgUploadInputChange);
constants.imgUploadButtonCancel.addEventListener('click', onCancelButtonClick);
