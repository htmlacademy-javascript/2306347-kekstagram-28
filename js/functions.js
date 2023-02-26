//Функция для проверки длины строки
const getStringLength = (testString, length) => (testString.length <= length);
getStringLengt('проверяемая строка', 20);

//Функция для проверки, является ли строка палиндромом
const getPalindrome = (string) => {
  const equableString = string.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for (let i = equableString.length - 1; i >= 0; i--) {
    reverseString += equableString.at(i);
  }
  return equableString === reverseString;
};
getPalindrome('ДовОд');

//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
const elicitNumber = (string) => {
  let result = '';
  for (i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
elicitNumber('2023 год');


//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.
const addSymbols = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength) {
    const newLengthResult = result.length + pad.length;
    const actualPad = newLengthResult <= minLength ? pad : pad.slice(0, minLength - newLengthResult);
    result = actualPad + result;
  }
  return result;
};
addSymbols('1', 2, '0');
