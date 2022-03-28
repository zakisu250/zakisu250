function sortByHeight(a: number[]): number[] {
  const sorted = a.filter((item) => item !== -1).sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = sorted[j];
      j++;
    }
  }
  return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
