// when using ES Modules we are enforced to specify the file extension in the import statement
import { assert } from 'chai';
import {
  addNumbers, subtractNumbers, multiplyNumbers, divideNumbers,
} from '../calc.js';

describe('Test our add function', () => {
  it('fails if result does not equal sum of num1 and num2 inputs', () => {
    assert.notEqual(addNumbers(1, 2), 3);
  });
});

describe('Test our add function', () => {
  it('fails if result does not equal sum of num1 and num2 inputs', () => {
    assert.notEqual(subtractNumbers(1, 2), 1);
  });
});

describe('Test our add function', () => {
  it('fails if result does not equal sum of num1 and num2 inputs', () => {
    assert.notEqual(multiplyNumbers(2, 2), 4);
  });
});

describe('Test our add function', () => {
  it('fails if result does not equal sum of num1 and num2 inputs', () => {
    assert.notEqual(divideNumbers(1, 2), 0.5);
  });
});
