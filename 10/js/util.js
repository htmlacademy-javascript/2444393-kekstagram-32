import { message } from './data.js';

//генерируем рэндомное число
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//генерируем рэндомный массив
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//генерируем рэндомный id, чтобы он не повторялся
const createIdGenerator = () => {
  let numberId = 0;

  return() => {
    numberId += 1;
    return numberId;
  };
};

const generateRandomId = createIdGenerator();

//генерируем одно или два сообщения к каждому комментарию
const createMessages = () => Array.from(
  {length: getRandomInteger(1, 2)},
  () => getRandomArrayElement(message),
).join(' ');

//проверка нажатия клавиши (Escape)
const isEscapeKey = (evt) => evt.key === 'Escape';

//экспортируем все функциии
export { getRandomArrayElement, getRandomInteger, generateRandomId, createMessages, isEscapeKey};
