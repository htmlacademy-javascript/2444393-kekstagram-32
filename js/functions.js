/* eslint-disable no-console */
const stringLengthChecks = (string, length) =>
  string.length <= length;

console.log(stringLengthChecks('проверяемая строка', 20));
console.log(stringLengthChecks('проверяемая строка', 18));
console.log(stringLengthChecks('проверяемая строка', 10));

const stringPalindromeChecks = (string) => {
  const newString = string.replaceAll(' ', '').toUpperCase();
  let reservedString = '';

  for (let i = newString.length - 1; i >= 0; i--) {
    reservedString += newString[i];
  }

  return newString === reservedString;
};

console.log(stringPalindromeChecks('Лёша на полке клопа нашёл'));
console.log(stringPalindromeChecks('топот'));
console.log(stringPalindromeChecks('ДовОд'));
console.log(stringPalindromeChecks('Кекс'));

const numberExtraction = (input) => {
  const string = input.toString();
  let numberString = '';

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i], 10))) {
      numberString += string[i];
    }
  }

  return numberString.length > 0 ? numberString : NaN;
};

console.log(numberExtraction('2023 год'));
console.log(numberExtraction('ECMAScript 2022'));
console.log(numberExtraction('1 кефир, 0.5 батона'));
console.log(numberExtraction('агент 007'));
console.log(numberExtraction('а я томат'));

console.log(numberExtraction(2023));
console.log(numberExtraction(-1));
console.log(numberExtraction(1.5));
