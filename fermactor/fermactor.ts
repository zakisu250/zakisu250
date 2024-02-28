function fermactor(n: number): number[] {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < i; j++) {
      const total = i ** 2 - j ** 2;
      if (total === n) {
        return [i, j];
      }
    }
  }
  return [0, 0];
}

console.log(fermactor(15));
