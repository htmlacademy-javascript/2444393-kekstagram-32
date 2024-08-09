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
};
