function sumOfTwo(a: number[], b: number[], v: number): boolean {
  const bSet: Set<number> = new Set(b);
  for (let i: number = 0; i < a.length; i++) {
    if (bSet.has(v - a[i])) {
      return true;
    }
  }
  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
