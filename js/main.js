const description = [
  'Отель у моря',
  'Ворота на пляж',
  'Лазурная бухта',
  'Девушка фотограф',
  'Суп с рисом',
  'Черная машина',
  'Клубника на тарелке',
  'Морс в стакане',
  'Девушка и самолет',
  'Лоток для обуви',
  'Пляж',
  'Белая Ауди',
  'Салат',
  'Кот - ролл',
  'Обувь для дома',
  'Где-то в небе',
  'Хор в черном',
  'Красная машина',
  'Тапочки с фонариком',
  'Пальмы в городе',
  'Макароны в тарелке',
  'Закат на море',
  'Мистер Крабс',
  'На концерте',
  'Машина и бегемот',
];

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Александр',
  'Ольга',
  'Дмитрий',
  'Елена',
  'Сергей',
  'Наталья'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createMassive = () => {
  const randomUrlIndex = getRandomInteger(1, 25);
  const randomCommentsCout = getRandomInteger(1, 30);
  const comments = [];

  for (let i = 0; i <= randomCommentsCout; i++) {
    const randomIdComments = getRandomInteger(1, 1000);
    const randomMessage = `${message[getRandomInteger(0, message.length - 1)]} ${message[getRandomInteger(0, message.length - 1)]}`;
    const randomNamesIndex = getRandomInteger(0, names.length - 1);
    const randomNames = names[randomNamesIndex];
    const randomAvatar = `../img/avatar-${randomNamesIndex}.svg`;

    comments.push({
      id: randomIdComments,
      avatar: randomAvatar,
      message: randomMessage,
      name: randomNames,
    });
  }

  return {
    id: getRandomInteger(1, 25),
    url: `../photos/${randomUrlIndex}.jpg`,
    discription: description[randomUrlIndex - 1],
    likes: getRandomInteger(15, 200),
    comments: comments
  };
};

const arrayLength = getRandomInteger(1, 25);
const similarMassive = Array.from({ length: arrayLength }, createMassive);
