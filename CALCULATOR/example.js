// const display = document.querySelector("#paragraph");
// const p = document.querySelector("#display");
// const x = document.querySelector(".paragraph");
// const equalsButton = document.querySelector(".equals");
// equalsButton.addEventListener("click", () => {
//   console.log("Button clicked");
// });
// const digit = document.querySelectorAll(".digit");
// console.log(digit)
// digit.forEach((button) => {
//   button.addEventListener("dblclick", () => {
//     console.log("Button was clicked");
//   });
// });
// const calculatorDisplay = document.querySelector("#display");
// calculatorDisplay.innerHTML = "<em>50</em>";
// const displayBackground = document.querySelector(".display");
// displayBackground.style.backgroundColor = "red";
// const operators = document.querySelectorAll(".operator");
// operators.forEach((operator) => {
//     operator.style.backgroundColor = "purple"
// })
// const body = document.querySelector("body");
// body.style.backgroundColor = "white"

let currentValue = "0";
let previousValue = "";
let operator = null;
let shouldResetDisplay = false;

const inputDigit = (digit) => {
  if (shouldResetDisplay) {
    currentValue = String(digit);
    shouldResetDisplay = false;
  } else {
    if (currentValue === "0") {
      currentValue = String(digit);
    } else {
      currentValue = currentValue + digit;
    }
  }

  updateDisplay();
};

const inputOperator = (op) => {
  previousValue = currentValue;
  operator = op;
  shouldResetDisplay = true;
};

const calculate = () => {
  const prev = parseFloat(previousValue);
  const curr = parseFloat(currentValue);

  let result;

  if (operator === "+") {
    result = prev + curr;
  } else if (operator === "-") {
    result = prev - curr;
  } else if (operator === "*") {
    result = prev * curr;
  } else if (operator === "/") {
    if (curr === "0") {
      currentValue = "Cannot divide by 0";
      return;
    }
    result = prev / curr;
  }

  currentValue = String(result);
  operator = null;
};

const clear = () => {
  currentValue = "0";
  previousValue = "";
  operator = null;
  shouldResetDisplay = false;
};

const updateDisplay = () => {
  const display = document.querySelector("#display");
  display.textContent = currentValue;
};

updateDisplay();

const digit = document.querySelectorAll(".digit");
digit.forEach((button) => {
  button.addEventListener("click", () => {
    inputDigit(button.textContent);
  });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
  button.addEventListener("click", () => {
    inputOperator(button.textContent);
  });
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  calculate();
  updateDisplay();
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});
