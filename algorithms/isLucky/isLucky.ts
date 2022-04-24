function isLucky(n: number): boolean {
  const numString = n.toString();
  const firstHalf = numString.slice(0, numString.length / 2);
  const secondHalf = numString.slice(numString.length / 2);

  const firstHalfSum = firstHalf
    .split('')
    .reduce((a, b) => parseInt(a.toString()) + parseInt(b), 0);
  const secondHalfSum = secondHalf
    .split('')
    .reduce((a, b) => parseInt(a.toString()) + parseInt(b), 0);

  return firstHalfSum === secondHalfSum;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
