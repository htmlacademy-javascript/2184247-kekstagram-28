// Первая функция
const checkLength = (string, number) => string.length <= number;

// Вторая функция
const checkString = (string) => {
  const preparedString = string.toLowerCase().replaceAll(' ', '');
  const reverseString = preparedString.split('').reverse().join('');
  return preparedString === reverseString;
};

// Третья функция 
const getNumber = (string) => {
  let number = '';
  for (let i = 0; i < string.length; i++) {
    const exactSign = parseInt(string.at(i), 10);
    if (!Number.isNaN(exactSign)) {
      number += exactSign;
    }
  }
  number = parseInt(number, 10);

  return number;
};

// Четвёртая функция
const addString = (string, number, extraString) => {
  let newString = '';
  if (string.length >= number) {
    newString = string;
    return newString;
  }
  const difference = number - string.length;
  const howMachAdd = difference / extraString.length;
  extraString += extraString.repeat(howMachAdd);
  newString = extraString.slice(0, difference) + string;
  return newString;
};
