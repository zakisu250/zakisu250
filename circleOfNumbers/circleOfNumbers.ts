function circleOfNumbers(n: number, firstNumber: number): number {
  const half = n / 2;

  if (firstNumber < half) {
    return firstNumber + half;
  }

  return firstNumber - half;
}

console.log(circleOfNumbers(10, 2));
