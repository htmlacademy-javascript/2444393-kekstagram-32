import * as configure from './config.js';

//функция проверяет, не превышает ли длина комментария максимальное значение
export function isValidCommentMaxLength(value) {
  return value.length <= 140;
}

//функция проверяет валидность хэштега по заданному шаблону
export function isValidHashtag(value) {
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
export function isValidHashtagMaxCount(value) {
  const hashtags = value.trim().split(/\s+/);
  return hashtags.length <= 5;
}

//функция проверяет наличие повторяющихся хэштегов
export function isHashtagsRepeat(value) {
  const hashtags = value.trim().split(/\s+/).map((hashtag) => hashtag.toLowerCase());
  const uniqueHashtags = new Set(hashtags);
  return uniqueHashtags.size === hashtags.length;
}
