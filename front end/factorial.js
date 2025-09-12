function factorialIterative(n) {
  if (n < 0) {
    return 'Factorial is not defined for negative numbers.';
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialIterative(5)); // Output: 120
console.log(factorialIterative(0)); // Output: 1