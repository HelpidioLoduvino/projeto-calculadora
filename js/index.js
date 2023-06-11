const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  // If the `displayValue` does not contain a decimal point
  if (!calculator.displayValue.includes(dot)) {
    // Append the decimal point
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  console.log(operator);
  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const currentValue = firstOperand || 0;
    const result = isScientificOperation(operator)
      ? performScientificCalculation[operator](inputValue)
      : performCalculation[operator](currentValue, inputValue);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

const performScientificCalculation = {
  cos: (value) => Math.cos(value),
  sin: (value) => Math.sin(value),
  tan: (value) => Math.tan(value),
  ln: (value) => Math.log(value),
  sqrt_3: (value) => Math.pow(value, 1 / 3),
  sqrt: (value) => Math.pow(value, 1 / 2),
  pow_3: (value) => Math.pow(value, 3),
  pow_2: (value) => Math.pow(value, 2),
};

const performCalculation = {
  "/": (firstOperand, secondOperand) => firstOperand / secondOperand,

  "*": (firstOperand, secondOperand) => firstOperand * secondOperand,

  "+": (firstOperand, secondOperand) => firstOperand + secondOperand,

  "-": (firstOperand, secondOperand) => firstOperand - secondOperand,

  "=": (firstOperand, secondOperand) => secondOperand,
};

function resetCalculator() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}

function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
  const theme = document.querySelector(".calculator").className;
  const isDarkTheme = theme.includes("dark-theme");

  if (calculator.displayValue === "" && !isDarkTheme) {
    display.value = "0";
  } else {
    display.value = calculator.displayValue;
  }
}

updateDisplay();

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }

  if (target.classList.contains("all-clear")) {
    resetCalculator();
    updateDisplay();
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});

const isScientificOperation = (op) =>
  op === "cos" ||
  op === "sin" ||
  op === "tan" ||
  op === "ln" ||
  op === "sqrt_3" ||
  op === "sqrt" ||
  op === "pow_3" ||
  op === "pow_2";

const themeToggleButtons = document.querySelectorAll(".theme-toggle");

themeToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.getAttribute("data-theme");
    document.querySelector(
      ".calculator"
    ).className = `calculator card ${theme}`;
  });
});
