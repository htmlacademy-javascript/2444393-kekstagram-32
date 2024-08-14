import * as configure from './config.js';
import * as constants from './selectors.js';
import { onFormSubmit } from './formHandlers.js';
import { isValidCommentMaxLength, isValidHashtag, isValidHashtagMaxCount, isHashtagsRepeat } from './validator.js';

// Инициализация Pristine для валидации формы
const pristine = new Pristine(constants.imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

// Регистрируем валидаторы в Pristine
pristine.addValidator(constants.descriptionInput, isValidCommentMaxLength, configure.COMMENT_ERRORS.MAX_LENGTH);
pristine.addValidator(constants.hashtagsInput, isValidHashtag, configure.HASHTAG_ERRORS.INVALID);
pristine.addValidator(constants.hashtagsInput, isValidHashtagMaxCount, configure.HASHTAG_ERRORS.MAX_COUNT);
pristine.addValidator(constants.hashtagsInput, isHashtagsRepeat, configure.HASHTAG_ERRORS.REPEAT);

constants.imgUploadForm.addEventListener('submit', (evt) => onFormSubmit(evt, pristine));
