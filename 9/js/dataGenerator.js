import {getRandomInteger, generateRandomId, createMessages} from './util.js';
import { description, names } from './data.js';

//избавляемся от магических чисел и строк
const MIN_INDEX = 0;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const PICTURES_COUNT = 25;
const AVATAR_PATH = '../img/avatar-';
const PHOTO_PATH = '../photos/';

//создаем массив объектов с комментариями
const createComments = () => {
  const randomNamesIndex = getRandomInteger(MIN_INDEX, names.length - 1);

  return {
    id: generateRandomId(),
    avatar: `${AVATAR_PATH}${randomNamesIndex + 1}.svg`,
    message: createMessages(),
    name: names[randomNamesIndex]
  };
};

//создаем основной массив объектов
const createMassive = (index) => ({
  id: index,
  url: `${PHOTO_PATH}${index}.jpg`,
  description: description[index - 1],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from(
    {length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)},
    createComments
  )
});

export const generateDataArray = () => Array.from(
  {length: PICTURES_COUNT},
  (_, index) => createMassive(index + 1)
);
