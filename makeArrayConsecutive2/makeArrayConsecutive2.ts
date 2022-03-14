function makeArrayConsecutive2(statues: number[]): number {
  return Math.max(...statues) - Math.min(...statues) - statues.length + 1;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
