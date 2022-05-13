const mathFunctions = require('../functions');

test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});

const x = 10
const y = 5

var sum = mathFunctions.sum(x, y)
test('sum: 10 + 5 to equal 15', () => {
  expect(sum).toBe(15);
});

var difference = mathFunctions.difference(x, y)
test('difference: 10 - 5 to equal 5', () => {
  expect(difference).toBe(5);
});

var product = mathFunctions.product(x, y)
test('product: 10 * 5 to equal 50', () => {
  expect(product).toBe(50);
});

var quotient = mathFunctions.quotient(x, y)
test('quotient: 10 / 5 to equal 2', () => {
  expect(quotient).toBe(2);
});

