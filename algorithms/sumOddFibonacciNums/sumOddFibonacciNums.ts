function sumOddFibonacciNums(num: number): number {
  let sum = 1;
  let current = 1;
  let previous = 0;
  while (current <= num) {
    if (current % 2 !== 0) {
      sum += current;
    }
    current += previous;
    previous = current - previous;
  }
  return sum;
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
