const checkZero = (number) => {
  if (number < 10) return `00${number}`;
  else if (number => 10 && number < 100) return `0${number}`;
  else return number;
};

export default checkZero;
