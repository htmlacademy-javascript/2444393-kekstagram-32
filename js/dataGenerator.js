import {getRandomArrayElement, getRandomInteger} from './util.js';
import { description, message, names } from './data.js';

//избавляемся от магических чисел и строк
const MIN_ID = 1;
const MAX_ID = 1000;
const MIN_INDEX = 0;
const MIN_URL_INDEX = 1;
const MAX_URL_INDEX = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS = 30;
const MIN_ARRAY_LENGTH = 1;
const MAX_ARRAY_LENGTH = 25;

const AVATAR_PATH = '../img/avatar-';
const PHOTO_PATH = '../photos/';

//создаем массив объектов с комментариями
const createComments = () => {
  const randomIdComments = getRandomInteger(MIN_ID, MAX_ID);
  const randomMessage = `${getRandomArrayElement(message)} ${getRandomArrayElement(message)}`;
  const randomNamesIndex = getRandomInteger(MIN_INDEX, names.length - 1);
  const randomNames = names[randomNamesIndex];
  const randomAvatar = `${AVATAR_PATH}${randomNamesIndex}.svg`;

  return {
    id: randomIdComments,
    avatar: randomAvatar,
    message: randomMessage,
    name: randomNames,
  };
};

//создаем основной массив объектов
const createMassive = () => {
  const randomUrlIndex = getRandomInteger(MIN_URL_INDEX, MAX_URL_INDEX);
  const randomCommentsCount = getRandomInteger(MIN_INDEX, MAX_COMMENTS);
  const commentsArray = [];

  //добавляем к основному массиву ообъектов массив объект с комментариями
  for (let i = 0; i <= randomCommentsCount; i++) {
    commentsArray.push(createComments());
  }

  return {
    id: getRandomInteger(MIN_ID, MAX_URL_INDEX),
    url: `${PHOTO_PATH}${randomUrlIndex}.jpg`,
    description: description[randomUrlIndex - 1],
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: commentsArray
  };
};

export const generateDataArray = () => {
  //задаем количество основных массив объектов
  const arrayLength = getRandomInteger(MIN_ARRAY_LENGTH, MAX_ARRAY_LENGTH);
  return Array.from({ length: arrayLength }, createMassive);
};
