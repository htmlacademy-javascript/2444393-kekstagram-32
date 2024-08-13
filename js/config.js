//pегулярное выражение для проверки хэштегов
const MIN_CHARACTER_LENGTH = 1;
const MAX_CHARACTER_LENGTH = 19;

function createHashtagPattern() {
  return new RegExp(`^#[a-zа-яё0-9]{${MIN_CHARACTER_LENGTH},${MAX_CHARACTER_LENGTH}}$`, 'i');
}
const hashtagPattern = createHashtagPattern();

//сообщения об ошибках при валидациии (formValidator.js)
const COMMENT_ERRORS = {
  MAX_LENGTH: 'Длина комментария не должна превышать 140 символов',
};
const HASHTAG_ERRORS = {
  INVALID: 'Некорректный хэштег',
  MAX_COUNT: 'Превышено количество хэштегов (максимум 5)',
  REPEAT: 'Повторяющиеся хэштеги',
};

//настройки слайдера (formValidator.js, effectManager.js)
const SLIDER_DEFAULTS = {
  min: 0,
  max: 100,
  start: 100,
  step: 1,
  connect: 'lower',
};

//эффекты (effectManager.js)
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

//api.js
//базовый URL для API или сервера
const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

//объект, содержащий маршруты (пути) для различных запросов к серверу
const Route = {
  GET_DATA: '/data',
  UPLOAD_PICTURE: '/',
};

//объект, содержащий HTTP-методы, которые будут использоваться для отправки запросов
const Method = {
  GET: 'GET',
  POST: 'POST',
};

//объект, содержащий сообщения об ошибках
const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  UPLOAD_PICTURE: 'Не удалось отправить файл. Попробуйте ещё раз',
};

//экспорт констант
export {hashtagPattern,
  COMMENT_ERRORS,
  HASHTAG_ERRORS,
  SLIDER_DEFAULTS,
  EFFECTS,
  effectOptions,
  BASE_URL,
  Route,
  Method,
  ErrorText
};
