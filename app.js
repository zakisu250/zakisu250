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

// exported callback function
export function exportedCallbackFunction(callback) {
  callback();
}

// exported anonymous function
export function exportedAnonymousFunction() {
  console.log('exported anonymous function');
}

// exported IIFE
export function exportedIIFE() {
  (function () {
    console.log('exported IIFE');
  })();
}

// exported IIFE with parameters
export function exportedIIFEWithParameters(a, b) {
  (function (a, b) {
    console.log(a + b);
  })(a, b);
}

// exported IIFE with return
export function exportedIIFEWithReturn() {
  return (function () {
    return 'exported IIFE with return';
  })();
}

// exported IIFE with return and parameters
export function exportedIIFEWithReturnAndParameters(a, b) {
  return (function (a, b) {
    return a + b;
  })(a, b);
}

// react component
export default function App() {
  return <div>App</div>;
}

// exported react component
export function ExportedApp() {
  return <div>Exported App</div>;
}

console.log(sum(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
console.log(callbackFunction);
console.log(asyncFunction());
console.log(asyncArrowFunction());
