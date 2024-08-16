import { isEscapeKey } from './util.js';
import * as constants from './constans/mainInterfaceConst.js';
import * as imgUploadConstants from './constans/imageUploadConst.js';

//функция для показа выбранного изображения в предварительном просмотре
function showPreviewImage(file) {
  const reader = new FileReader();
  reader.onload = function () {
    const imageSrc = reader.result;
    imgUploadConstants.imagePreview.src = imageSrc;

    // Обновляем превью для каждого эффекта
    const effectsPreviews = document.querySelectorAll('.effects__preview');
    effectsPreviews.forEach((preview) => {
      preview.style.backgroundImage = `url(${imageSrc})`;
    });
  };
  reader.readAsDataURL(file);
}

//функция для открытия окна редактирования изображения
function onImgUploadInputChange(evt) {
  evt.preventDefault();
  const file = evt.target.files[0];

  if (file && file.type.startsWith('image/')) {
    showPreviewImage(file);
    imgUploadConstants.imgUploadOverlay.classList.remove('hidden');
    constants.bodyElement.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
    imgUploadConstants.imgUploadInput.value = '';
  } else {
    // eslint-disable-next-line no-alert
    alert ('Пожалуйста, выберите изображение.');
  }
}

//функция для закрытия окна редактирования изображения
function closeUploadPicture() {
  imgUploadConstants.imgUploadOverlay.classList.add('hidden');
  constants.bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

//функция для обработки нажатий клавиш на клавиатуре
function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    if (document.activeElement !== imgUploadConstants.hashtagsInput && document.activeElement !== imgUploadConstants.descriptionInput) {
      evt.preventDefault();
      closeUploadPicture();
    }
  }
}

//функция для закрытия окна редактирования по клику на кнопку "Закрыть"
function onCancelButtonClick() {
  closeUploadPicture();
}

imgUploadConstants.imgUploadInput.addEventListener('change', onImgUploadInputChange);
imgUploadConstants.imgUploadButtonCancel.addEventListener('click', onCancelButtonClick);
