// functions
function sum(a, b) {
  return a + b;
}

// exported function
export function subtract(a, b) {
  return a - b;
}

// arrow function
const multiply = (a, b) => a * b;

// exported arrow function
export const divide = (a, b) => a / b;

// callback function
function callbackFunction(callback) {
  callback();
}

// anonymous function
callbackFunction(function () {
  console.log('callback function');
});

console.log(sum(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
