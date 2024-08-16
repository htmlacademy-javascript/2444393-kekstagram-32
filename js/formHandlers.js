import * as configure from './config.js';
import { resetScale } from './scaleManager.js';
import { onMessageRender } from './uploadNotification.js';
import * as imgUploadConstants from './constans/imageUploadConst.js';


//функция отключает кнопку отправки на время проверки и отображает сообщение об успехе или ошибке
export function onFormSubmit(evt, pristine) {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    imgUploadConstants.submitButton.disabled = true;
    showSuccessMessage();
    imgUploadConstants.submitButton.disabled = false;
  } else {
    showErrorMessage();
  }
}

//функция сбрасывает форму загрузки изображения и закрывает модальное окно
export function resetForm() {
  imgUploadConstants.imgUploadForm.reset();

  //сброс масштаба
  if (imgUploadConstants.scaleControlValue) {
    resetScale();
  }

  //сброс эффекта
  if (imgUploadConstants.effectLevelSlider) {
    imgUploadConstants.effectLevelSlider.noUiSlider.set(configure.SLIDER_DEFAULTS.start);
  }

  //сброс поля загрузки фотографии
  if (imgUploadConstants.imgUploadInput) {
    imgUploadConstants.imgUploadInput.value = '';
  }

  //закрытие модального окна
  if (imgUploadConstants.imgUploadOverlay) {
    imgUploadConstants.imgUploadOverlay.classList.add('hidden');
  }
}

//функция показывает сообщение об успешной отправке формы
export function showSuccessMessage() {
  onMessageRender('#success', '.success__button');
  resetForm();
}

//функция показывает сообщение об ошибке при отправке формы
export function showErrorMessage() {
  onMessageRender('#error', '.error__button');
}
