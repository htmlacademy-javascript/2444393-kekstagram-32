import * as configure from './config.js';
import * as constants from './selectors.js';
import { isEscapeKey } from './util.js';
import { resetScale } from './scaleManager.js';

//инициализация Pristine для валидации формы
const pristine = new Pristine(constants.imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

//функция проверяет, не превышает ли длина комментария максимальное значение
function isValidCommentMaxLength(value) {
  return value.length <= 140;
}

//функция проверяет валидность хэштега по заданному шаблону
function isValidHashtag(value) {
  if (value.trim() === '') {
    return true;
  }

  if (value[0] === ' ') {
    return false;
  }

  const hashtags = value.trim().split(/\s+/);
  return hashtags.every((hashtag) => configure.hashtagPattern.test(hashtag));
}

//функция проверяет не превышает ли количество хэштегов максимальное значение
function isValidHashtagMaxCount(value) {
  const hashtags = value.trim().split(/\s+/);
  return hashtags.length <= 5;
}

//функция проверяет наличие повторяющихся хэштегов
function isHashtagsRepeat(value) {
  const hashtags = value.trim().split(/\s+/).map((hashtag) => hashtag.toLowerCase());
  const uniqueHashtags = new Set(hashtags);
  return uniqueHashtags.size === hashtags.length;
}

//регистрируем валидаторы в Pristine
pristine.addValidator(constants.descriptionInput, isValidCommentMaxLength, configure.COMMENT_ERRORS.MAX_LENGTH);
pristine.addValidator(constants.hashtagsInput, isValidHashtag, configure.HASHTAG_ERRORS.INVALID);
pristine.addValidator(constants.hashtagsInput, isValidHashtagMaxCount, configure.HASHTAG_ERRORS.MAX_COUNT);
pristine.addValidator(constants.hashtagsInput, isHashtagsRepeat, configure.HASHTAG_ERRORS.REPEAT);

//функция отключает кнопку отправки на время проверки и отображает сообщение об успехе или ошибке
function onFormSubmit(evt) {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid) {
    constants.submitButton.disabled = true;

    //симуляция процесса отправки формы
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // Симуляция успеха или ошибки

      if (isSuccess) {
        showSuccessMessage();
      } else {
        showErrorMessage();
      }

      //сброс состояния кнопки отправки после обработки
      constants.submitButton.disabled = false;
    }, 1000);
  }
}

//функция показывает сообщение об успехе или ошибке и обрабатывает его закрытие.
function showMessage(templateId, buttonClass) {
  const template = document.querySelector(templateId).content;
  const messageElement = template.cloneNode(true).firstElementChild;
  constants.bodyElement.appendChild(messageElement);

  function removeMessage() {
    messageElement.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onDocumentClick);
  }

  function onDocumentKeydown(evt) {
    if (isEscapeKey(evt)) {
      removeMessage();
    }
  }

  function onDocumentClick(evt) {
    if (!messageElement.contains(evt.target)) {
      removeMessage();
    }
  }

  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);

  const button = messageElement.querySelector(buttonClass);
  if (button) {
    button.addEventListener('click', removeMessage);
  }
}

//функция сбрасывает форму загрузки изображения и закрывает модальное окно
function resetForm() {
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
function showSuccessMessage() {
  showMessage('#success', '.success__button');
  resetForm();
}

//функция показывает сообщение об ошибке при отправке формы
function showErrorMessage() {
  showMessage('#error', '.error__button');
}

constants.imgUploadForm.addEventListener('submit', onFormSubmit);
