function houseNumbersSum(inputArray: number[]): number {
  return inputArray.slice(0, inputArray.indexOf(0)).reduce((a, b) => a + b, 0);
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
