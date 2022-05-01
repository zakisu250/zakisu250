function squareDigitsSequence(a0: number): number {
  const sequence = [a0];
  let current = a0;
  while (true) {
    let next = 0;
    while (current > 0) {
      next += (current % 10) ** 2;
      current = Math.floor(current / 10);
    }
    if (sequence.includes(next)) {
      return sequence.length + 1;
    }
    sequence.push(next);
    current = next;
  }
}

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
