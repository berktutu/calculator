const allBtns = document.querySelector(".buttons");
const operators = document.querySelectorAll(".operator");
const cleaners = document.querySelectorAll(".cleaner");
const digits = document.querySelectorAll(".digit");
const display = document.querySelector("#display");
const addOp = document.querySelector(".add");
const subOp = document.querySelector(".subtract");
const multiplyOp = document.querySelector(".multiply");
const divideOp = document.querySelector(".divide");
const remainderOp = document.querySelector(".remainder");
const equals = document.querySelector(".equals");
const decimalBtn = document.querySelector(".decimal");

// Operator functions

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const remainder = function (a, b) {
  return a % b;
};

// Main variables
let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = "";
let isOperatorPressed = false;

// Function to operate with given numbers
const operate = function (operator, firstNum, secondNum) {
  return operator(firstNum, secondNum);
};

// Function to display the numbers

const displayScreen = function () {
  const displayAppend = function (value) {
    displayValue += value;
    updateDisplay();
  };

  const clearDisplay = function () {
    displayValue = "";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    updateDisplay();
  };

  const clearLastValue = function () {
    if (isOperatorPressed) {
      displayValue = "";
      isOperatorPressed = false;
    }
    displayValue = display.value.slice(0, -1);
    updateDisplay();
  };

  const updateDisplay = function () {
    display.value = displayValue;
  };

  digits.forEach((digit) =>
    digit.addEventListener("click", function (e) {
      displayAppend(e.target.textContent);
    })
  );

  cleaners.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      if (e.target.classList.contains("all-clear")) {
        clearDisplay();
      }

      if (e.target.classList.contains("clear")) {
        clearLastValue();
      }
    })
  );

  operators.forEach((op) =>
    op.addEventListener("click", function (e) {
      if (firstNumber === null) {
        firstNumber = parseFloat(displayValue);
        operator = e.target.textContent;
        displayValue = "";
      } else if (operator) {
        secondNumber = parseFloat(displayValue);
        let result = calculate();
        displayValue = result.toString();
        updateDisplay();
        firstNumber = result;
      }
    })
  );

  equals.addEventListener("click", function () {
    if (firstNumber !== null && displayValue !== "") {
      secondNumber = parseFloat(displayValue);
      let result = calculate();
      displayValue = result.toString();
      updateDisplay();
      firstNumber = null;
      secondNumber = null;
      operator = null;
      isOperatorPressed = false;
    }
  });

  const calculate = function () {
    let result;
    switch (operator) {
      case "+":
        result = operate(add, firstNumber, secondNumber);
        break;
      case "-":
        result = operate(subtract, firstNumber, secondNumber);
        break;
      case "*":
        result = operate(multiply, firstNumber, secondNumber);
        break;
      case "/":
        result = operate(divide, firstNumber, secondNumber);
        break;
      case "%":
        result = operate(remainder, firstNumber, secondNumber);
        break;
      default:
        result = "Error";
    }
    return result;
  };

  const decimalBtn = document.querySelector(".decimal");
  decimalBtn.addEventListener("click", function () {
    if (!displayValue.includes(".")) {
      displayAppend(".");
    }
  });
};
displayScreen();
