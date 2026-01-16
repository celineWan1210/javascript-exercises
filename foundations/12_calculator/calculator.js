const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
  const initialValue = 0;
  return array.reduce(
    (total, currentNumber) => total + currentNumber, 
    initialValue,
  )
}

const multiply = function(array) {
  const initialValue = 1;
  return array.reduce(
    (total, currentNumber) => total * currentNumber,
    initialValue,
  )
};

const power = function(number, power) {
  let total = 1;
  for (let i = 0; i < power; i++) {
    total *= number;
  }
  return total;
};

const factorial = function(number) {
  let total = 1;
  for (let i = number; i >= 1; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
