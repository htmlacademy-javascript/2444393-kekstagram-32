import * as constants from './selectors.js';
import * as configure from './config.js';
import { resetScale } from './scaleManager.js';
import { renderResponseMessage } from './uploadNotification.js';


//функция отключает кнопку отправки на время проверки и отображает сообщение об успехе или ошибке
export function onFormSubmit(evt, pristine) {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    constants.submitButton.disabled = true;
    showSuccessMessage();
    constants.submitButton.disabled = false;
  } else {
    showErrorMessage();
  }
}

//функция сбрасывает форму загрузки изображения и закрывает модальное окно
export function resetForm() {
  constants.imgUploadForm.reset();

  //сброс масштаба
  if (constants.scaleControlValue) {
    resetScale();
  }

  //сброс эффекта
  if (constants.effectLevelSlider) {
    constants.effectLevelSlider.noUiSlider.set(configure.SLIDER_DEFAULTS.start);
  }

  //сброс поля загрузки фотографии
  if (constants.imgUploadInput) {
    constants.imgUploadInput.value = '';
  }

  //закрытие модального окна
  if (constants.imgUploadOverlay) {
    constants.imgUploadOverlay.classList.add('hidden');
  }
}

//функция показывает сообщение об успешной отправке формы
export function showSuccessMessage() {
  renderResponseMessage('#success', '.success__button');
  resetForm();
}

//функция показывает сообщение об ошибке при отправке формы
export function showErrorMessage() {
  renderResponseMessage('#error', '.error__button');
}
