function containsCloseNums(nums: number[], k: number): boolean {
  const numsMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) {
      if (i - numsMap.get(nums[i])! <= k) {
        return true;
      }
    }
    numsMap.set(nums[i], i);
  }

  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
