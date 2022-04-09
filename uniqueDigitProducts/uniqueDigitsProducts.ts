function uniqueDigitProducts(a: number[]): number {
  const uniqueProducts = new Set();
  a.forEach((num) => {
    const product = num
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, cur) => acc * cur, 1);
    uniqueProducts.add(product);
  });
  return uniqueProducts.size;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
