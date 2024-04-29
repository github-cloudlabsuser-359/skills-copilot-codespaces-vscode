const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calculator() {
    readline.question('Enter the first number: ', (number1) => {
      const num1 = parseFloat(number1);
      readline.question('Enter the operator (+, -, *, /): ', (operator) => {
        readline.question('Enter the second number: ', (number2) => {
          const num2 = parseFloat(number2);
          let result;
          switch (operator) {
            case '+':
              result = num1 + num2;
              break;
            case '-':
              result = num1 - num2;
              break;
            case '*':
              result = num1 * num2;
              break;
            case '/':
              if (num2 !== 0) {
                result = num1 / num2;
              } else {
                console.log('Error! Division by zero is not allowed.');
                readline.close();
                return;
              }
              break;
            default:
              console.log('Error! Invalid operator.');
              readline.close();
              return;
          }
          console.log(`The result is: ${result}`);
          readline.close();
        });
      });
    });
  }
  
  calculator();

  const calculator = require('./calculator'); // assuming calculator function is exported from calculator.js

test('adds 1 + 2 to equal 3', () => {
  return calculator(1, '+', 2).then(data => {
    expect(data).toBe(3);
  });
});

test('subtracts 5 - 3 to equal 2', () => {
  return calculator(5, '-', 3).then(data => {
    expect(data).toBe(2);
  });
});

test('multiplies 3 * 3 to equal 9', () => {
  return calculator(3, '*', 3).then(data => {
    expect(data).toBe(9);
  });
});

test('divides 10 / 2 to equal 5', () => {
  return calculator(10, '/', 2).then(data => {
    expect(data).toBe(5);
  });
});

test('throws error when dividing by zero', () => {
  expect.assertions(1);
  return calculator(10, '/', 0).catch(e => expect(e).toMatch('Error! Division by zero is not allowed.'));
});

test('throws error when operator is invalid', () => {
  expect.assertions(1);
  return calculator(10, 'invalid', 0).catch(e => expect(e).toMatch('Error! Invalid operator.'));
});