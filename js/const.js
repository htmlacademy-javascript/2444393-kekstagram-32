const bodyElement = document.querySelector('body');
const similarListElement = document.querySelector('.pictures');

// константы из fullPicture.js
const bigPictureWindow = document.querySelector('.big-picture');
const bigPictureCloseElement = document.querySelector('.big-picture__cancel');
const commentListElement = bigPictureWindow.querySelector('.social__comments');
const commentLoaderElementButton = bigPictureWindow.querySelector('.comments-loader');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const commentElementShownCount = bigPictureWindow.querySelector('.social__comment-shown-count');
const commentElementTotalCount = bigPictureWindow.querySelector('.social__comment-total-count');

// константы из uploaderForm.js и formValidator.js
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadButtonCancel = document.querySelector('.img-upload__cancel');
const hashtagsInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const submitButton = imgUploadForm.querySelector('.img-upload__submit');

// константы с сообщениями об ошибках при валидациии (formValidator.js)
const COMMENT_ERRORS = {
  MAX_LENGTH: 'Длина комментария не должна превышать 140 символов',
};
const HASHTAG_ERRORS = {
  INVALID: 'Некорректный хэштег',
  MAX_COUNT: 'Превышено количество хэштегов (максимум 5)',
  REPEAT: 'Повторяющиеся хэштеги',
};

// константы из scaleManager.js
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');

//константы из effectManager.js
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectLevelContainer = document.querySelector('.img-upload__effect-level');
const effectRadios = document.querySelectorAll('input[name="effect"]');

const SLIDER_DEFAULTS = {
  min: 0,
  max: 100,
  start: 100,
  step: 1,
  connect: 'lower',
};

const EFFECTS = {
  chrome: 'chrome',
  sepia: 'sepia',
  marvin: 'marvin',
  phobos: 'phobos',
  heat: 'heat',
};

const effectOptions = {
  [EFFECTS.chrome]: { filter: (value) => `grayscale(${value})`, range: { min: 0, max: 1 }, start: 1, step: 0.1 },
  [EFFECTS.sepia]: { filter: (value) => `sepia(${value})`, range: { min: 0, max: 1 }, start: 1, step: 0.1 },
  [EFFECTS.marvin]: { filter: (value) => `invert(${value}%)`, range: { min: 0, max: 100 }, start: 100, step: 1 },
  [EFFECTS.phobos]: { filter: (value) => `blur(${value}px)`, range: { min: 0, max: 3 }, start: 3, step: 0.1 },
  [EFFECTS.heat]: { filter: (value) => `brightness(${value})`, range: { min: 1, max: 3 }, start: 3, step: 0.1 },
};

// экспорт констант
export { bodyElement,
  similarListElement,
  bigPictureWindow,
  bigPictureCloseElement,
  commentListElement,
  commentLoaderElementButton,
  commentElement,
  commentElementShownCount,
  commentElementTotalCount,
  imgUploadForm,
  imgUploadInput,
  imgUploadOverlay,
  imgUploadButtonCancel,
  hashtagsInput,
  descriptionInput,
  submitButton,
  COMMENT_ERRORS,
  HASHTAG_ERRORS,
  scaleSmallerButton,
  scaleBiggerButton,
  scaleControlValue,
  imgUploadPreview,
  effectLevelSlider,
  effectLevelValue,
  imagePreview,
  effectLevelContainer,
  effectRadios,
  SLIDER_DEFAULTS,
  EFFECTS,
  effectOptions
};
