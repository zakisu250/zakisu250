function electionsWinners(votes: number[], k: number): number {
  const max = Math.max(...votes);
  const count = votes.filter((vote) => vote + k > max).length;

  if (count === 0 && votes.filter((vote) => vote === max).length > 1) {
    return 0;
  }

  return count;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
