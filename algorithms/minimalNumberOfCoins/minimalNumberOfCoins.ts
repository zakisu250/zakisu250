function minimalNumberOfCoins(coins: number[], price: number): number {
  let count = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    count += Math.floor(price / coins[i]);
    price %= coins[i];
  }
  return count;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));
