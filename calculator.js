const allBtns = document.querySelector(".buttons");
const operators = document.querySelectorAll(".operator");
const digits = document.querySelectorAll(".digit");
const display = document.querySelector("#display");
const addOp = document.querySelector(".add");
const subOp = document.querySelector(".subtract");
const multiplyOp = document.querySelector(".multiply");
const divideOp = document.querySelector(".divide");
const remainderOp = document.querySelector(".remainder");

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
let firstNumber;
let operator;
let secondNumber;
let displayValue = "";

// Function to operate with given numbers
const operate = function (operator, firstNum, secondNum) {
  return operator(firstNum, secondNum);
};

// Function to display the numbers

const calculation = function () {
  const displayAppend = function (value) {
    displayValue += value;
    updateDisplay();
  };

  const clearDisplay = function () {
    displayValue = "";
    updateDisplay();
  };

  const clearLastValue = function () {
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

  operators.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      if (e.target.classList.contains("all-clear")) {
        clearDisplay();
      }

      if (e.target.classList.contains("clear")) {
        clearLastValue();
      }

      if (e.target.classList.contains("remainder")) {
        displayAppend(e.target.textContent);
      }
    })
  );
};
calculation();
