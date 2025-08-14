const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function() {
  return Array.isArray(arguments[0]) ? 
    arguments[0].reduce((acc, curr) => acc * curr, 1) : 
    0; // Return 0 if no array is provided
};

const power = function() {
  const [base, exponent] = arguments;
  return Math.pow(base, exponent);
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
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
