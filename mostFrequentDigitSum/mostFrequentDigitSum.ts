function mostFrequentDigitSum(n: number): number {
  const sum = (n: number) => {
    let sum = 0;
    while (n) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  };

  const sums: { [key: number]: number } = {};
  while (n) {
    const s = sum(n);
    sums[s] = sums[s] ? sums[s] + 1 : 1;
    n -= s;
  }

  let max = 0;
  let maxKey = 0;
  for (const key in sums) {
    if (sums[key] > max) {
      max = sums[key];
      maxKey = parseInt(key);
    }
  }

  return maxKey;
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));
