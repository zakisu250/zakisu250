function composeRanges(nums: number[]): string[] {
  const ranges = [];
  let start = 0;
  let end = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      end = i;
    } else {
      ranges.push(
        start === end ? `${nums[start]}` : `${nums[start]}->${nums[end]}`
      );
      start = i;
      end = i;
    }
  }

  ranges.push(
    start === end ? `${nums[start]}` : `${nums[start]}->${nums[end]}`
  );

  return ranges;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
