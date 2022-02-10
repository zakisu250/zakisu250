function containsDuplicates(a: number[]): boolean {
  const numSet = new Set<number>();

  for (let i = 0; i < a.length; i++) {
    if (numSet.has(a[i])) {
      return true;
    }
    numSet.add(a[i]);
  }

  return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
