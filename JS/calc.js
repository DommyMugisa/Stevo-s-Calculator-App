// const num1 = document.getElementById('num1');
// const num2 = document.getElementById('num2');
// const result = document.getElementById('result');
let result;

function addNumbers(num1, num2) {
  // Get the values of the input elements
  // parseInt(num1.value, 10);
  // parseInt(num2.value, 10);
  // const num1 = parseInt(document.getElementById('num1').value, 10);
  // const num2 = parseInt(document.getElementById('num2', 10).value, 10);

  // Add the two numbers together
  const sum = parseInt(num1.value, 10) + parseInt(num2.value, 10);

  // Display the result in the paragraph element
  result = `Result = ${sum}`;
  // result.textContent = `Result = ${sum}`;
}

function subtractNumbers(num1, num2) {
  // Get the values of the input elements
  parseInt(num1.value, 10);
  parseInt(num2.value, 10);
  // const num1 = parseInt(document.getElementById('num1').value, 10);
  // const num2 = parseInt(document.getElementById('num2').value, 10);

  // Subtract the two numbers together
  const difference = parseInt(num1.value, 10) - parseInt(num2.value, 10);

  // Display the result in the paragraph element
  result = `Result = ${difference}`;
  // result.textContent = `Result = ${difference}`;
}

function multiplyNumbers(num1, num2) {
  // Get the values of the input elements
  parseInt(num1.value, 10);
  parseInt(num2.value, 10);
  // const num1 = parseInt(document.getElementById('num1').value, 10);
  // const num2 = parseInt(document.getElementById('num2').value, 10);

  // Multiply the two numbers together
  const product = parseInt(num1.value, 10) * parseInt(num2.value, 10);

  // Display the result in the paragraph element
  result = `Result = ${product}`;
  // result.textContent = `Result = ${product}`;
}

function divideNumbers(num1, num2) {
  // Get the values of the input elements
  parseInt(num1.value, 10);
  parseInt(num2.value, 10);
  // const num1 = parseInt(document.getElementById('num1').value, 10);
  // const num2 = parseInt(document.getElementById('num2').value, 10);

  // Divide the two numbers together
  const quotient = parseInt(num1.value, 10) / parseInt(num2.value, 10);

  // Display the result in the paragraph element
  result = `Result = ${quotient.toFixed(2)}`;
  // result.textContent = `Result = ${quotient.toFixed(2)}`;
}

export {
  addNumbers, subtractNumbers, multiplyNumbers, divideNumbers,
};
