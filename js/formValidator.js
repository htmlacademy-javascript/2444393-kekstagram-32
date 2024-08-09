import * as constants from './const.js';

//объявляем pristine
const pristine = new Pristine(constants.imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

// функция отключения кнопки отправки во время выполнения валидации
function onFormSubmit(evt) {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    constants.submitButton.disabled = true;

    setTimeout(() => {
      constants.imgUploadForm.submit();
      constants.submitButton.disabled = false;
    }, 1000);
  }
}

constants.imgUploadForm.addEventListener('submit', onFormSubmit);

// функция для проверки длины комментария
function isValidCommentMaxLength(value) {
  return value.length <= 140;
}
// функция для проверки валидности каждого хэштега
function isValidHashtag(value) {
  if (value.trim() === '') {
    return true;
  }
  const hashtags = value.trim().split(/\s+/);
  const hashtagPattern = /^#[a-zа-яё0-9]{1,19}$/i;

  return hashtags.every((hashtag) => hashtagPattern.test(hashtag));
}

// функция для проверки максимального количества хэштегов
function isValidHashtagMaxCount(value) {
  const hashtags = value.trim().split(/\s+/);
  return hashtags.length <= 5;
}

// функция для проверки на повторяющиеся хэштеги
function isHashtagsRepeat(value) {
  const hashtags = value.trim().split(/\s+/).map((hashtag) => hashtag.toLowerCase());
  const uniqueHashtags = new Set(hashtags);
  return uniqueHashtags.size === hashtags.length;
}

pristine.addValidator(constants.descriptionInput, isValidCommentMaxLength, constants.COMMENT_ERRORS.MAX_LENGTH);
pristine.addValidator(constants.hashtagsInput, isValidHashtag, constants.HASHTAG_ERRORS.INVALID);
pristine.addValidator(constants.hashtagsInput, isValidHashtagMaxCount, constants.HASHTAG_ERRORS.MAX_COUNT);
pristine.addValidator(constants.hashtagsInput, isHashtagsRepeat, constants.HASHTAG_ERRORS.REPEAT);
