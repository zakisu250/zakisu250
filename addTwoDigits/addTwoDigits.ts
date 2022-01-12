function addTwoDigits(n: any): number {
  const nums = n.toString().split('');
  return nums.reduce((a: string, b: string) => parseInt(a) + parseInt(b));
}

console.log(addTwoDigits(29));
