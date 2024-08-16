import * as configure from './config.js';
import * as imgUploadConstants from './constans/imageUploadConst.js';
import { onFormSubmit } from './formHandlers.js';
import { isValidCommentMaxLength, isValidHashtag, isValidHashtagMaxCount, isHashtagsRepeat } from './validator.js';

// Инициализация Pristine для валидации формы
const pristine = new Pristine(imgUploadConstants.imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

// Регистрируем валидаторы в Pristine
pristine.addValidator(imgUploadConstants.descriptionInput, isValidCommentMaxLength, configure.COMMENT_ERRORS.MAX_LENGTH);
pristine.addValidator(imgUploadConstants.hashtagsInput, isValidHashtag, configure.HASHTAG_ERRORS.INVALID);
pristine.addValidator(imgUploadConstants.hashtagsInput, isValidHashtagMaxCount, configure.HASHTAG_ERRORS.MAX_COUNT);
pristine.addValidator(imgUploadConstants.hashtagsInput, isHashtagsRepeat, configure.HASHTAG_ERRORS.REPEAT);

imgUploadConstants.imgUploadForm.addEventListener('submit', (evt) => onFormSubmit(evt, pristine));
