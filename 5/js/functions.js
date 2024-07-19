/* eslint-disable no-console */
const checksStringLength = (string, length) =>
  string.length <= length;

console.log(checksStringLength('проверяемая строка', 20));
console.log(checksStringLength('проверяемая строка', 18));
console.log(checksStringLength('проверяемая строка', 10));

const cheksStringPalindrome = (string) => {
  const newString = string.replaceAll(' ', '').toUpperCase();
  let reservedString = '';

  for (let i = newString.length - 1; i >= 0; i--) {
    reservedString += newString[i];
  }

  return newString === reservedString;
};

console.log(cheksStringPalindrome('Лёша на полке клопа нашёл'));
console.log(cheksStringPalindrome('топот'));
console.log(cheksStringPalindrome('ДовОд'));
console.log(cheksStringPalindrome('Кекс'));

const extractionNumber = (input) => {
  const string = input.toString();
  let numberString = '';

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i], 10))) {
      numberString += string[i];
    }
  }

  return numberString.length > 0 ? numberString : NaN;
};

console.log(extractionNumber('2023 год'));
console.log(extractionNumber('ECMAScript 2022'));
console.log(extractionNumber('1 кефир, 0.5 батона'));
console.log(extractionNumber('агент 007'));
console.log(extractionNumber('а я томат'));

console.log(extractionNumber(2023));
console.log(extractionNumber(-1));
console.log(extractionNumber(1.5));
