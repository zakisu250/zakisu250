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

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log('IIFE');
})();

// async function
async function asyncFunction() {
  return 'async function';
}

// async arrow function
const asyncArrowFunction = async () => {
  return 'async arrow function';
};

// exported async function
export async function asyncExportedFunction() {
  return 'async exported function';
}

// exported async arrow function
export const asyncExportedArrowFunction = async () => {
  return 'async exported arrow function';
};

console.log(sum(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
console.log(callbackFunction);
console.log(asyncFunction());
console.log(asyncArrowFunction());
