//Функция для проверки длины строки
const getStringLength = (testString, length) => testString.length <= length;
getStringLength('проверяемая строка', 20);

//Функция для проверки, является ли строка палиндромом
const isReverseString = (string) => {
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string.at(i);
  }
  return reverseString;
};

const isPalindrome = (string) => {
  const newReverseString = string.toLowerCase().replaceAll(' ', '');
  if (newReverseString === isReverseString(newReverseString)) {
    return true;
  }
  return false;
};

isPalindrome('ДовОд');


//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
const elicitNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
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
