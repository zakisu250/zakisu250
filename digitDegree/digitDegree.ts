function digitDegree(n: number): number {
  let count = 0;

  if (n < 10) {
    return count;
  }

  while (true) {
    count++;
    n = n
      .toString()
      .split('')
      .reduce((a, b) => parseInt(a.toString()) + parseInt(b.toString()), 0);

    if (n < 10) {
      return count;
    }
  }
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
