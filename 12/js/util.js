import { message } from './data.js';

//функция генерирует случайное целое число в заданном диапазоне.
function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//функция возвращает случайный элемент из переданного массива.
function getRandomArrayElement(elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
}

//функция создает генератор уникальных идентификаторов.
function createIdGenerator() {
  let numberId = 0;

  return function () {
    numberId += 1;
    return numberId;
  };
}

const generateRandomId = createIdGenerator();

//функция генерирует одно или два случайных сообщения.
function createMessages() {
  return Array.from(
    { length: getRandomInteger(1, 2) },
    () => getRandomArrayElement(message)
  ).join(' ');
}

//функция проверяет, была ли нажата клавиша Escape
function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

//функция добавляет сообщение об ошибке загрузки данных на страницу и удаляет его через 5 секунд
function showAlert(errorMessage) {
  const template = document.querySelector('#data-error').content.cloneNode(true);
  const body = document.querySelector('body');
  body.appendChild(template);
  const errorElement = body.querySelector('.data-error');
  errorElement.querySelector('.data-error__title').textContent = errorMessage;

  setTimeout(() => {
    errorElement.remove();
  }, 5000);
}

export { getRandomArrayElement, getRandomInteger, generateRandomId, createMessages, isEscapeKey, showAlert };

