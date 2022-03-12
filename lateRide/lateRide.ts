function lateRide(n: number): number {
  const hours = Math.floor(n / 60);
  const minutes = n % 60;
  return (
    hours
      .toString()
      .split('')
      .map(Number)
      .reduce((a, b) => a + b, 0) +
    minutes
      .toString()
      .split('')
      .map(Number)
      .reduce((a, b) => a + b, 0)
  );
}

console.log(lateRide(240));
console.log(lateRide(808));
