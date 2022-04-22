function firstDuplicate(a: number[]): number {
  const numSet = new Set();
  for (let i = 0; i < a.length; i++) {
    if (numSet.has(a[i])) {
      return a[i];
    }
    numSet.add(a[i]);
  }
  return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
