const bodyElement = document.querySelector('body');
const similarListElement = document.querySelector('.pictures');
const imgFilters = document.querySelector('.img-filters');
const filtersForm = document.querySelector('.img-filters__form');
const filterButtons = document.querySelectorAll('.img-filters__button');

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

//константы из filterManager.js
const imgFiltersSection = document.querySelector('.img-filters');
const imgFiltersForm = imgFiltersSection.querySelector('.img-filters__form');
const picturesContainer = document.querySelector('.pictures');

export { bodyElement,
  similarListElement,
  imgFilters,
  filtersForm,
  filterButtons,
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
  scaleSmallerButton,
  scaleBiggerButton,
  scaleControlValue,
  imgUploadPreview,
  effectLevelSlider,
  effectLevelValue,
  imagePreview,
  effectLevelContainer,
  effectRadios,
  imgFiltersSection,
  imgFiltersForm,
  picturesContainer
};
