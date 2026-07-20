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
    // currentValue = currentValue === "0" ? String(digit) : currentValue + digit;
  }

  console.log("Current value", currentValue);
};

const inputOperator = (op) => {
  previousValue = currentValue;
  operator = op;
  shouldResetDisplay = true;

  console.log("Stored:", previousValue, "Operator:", op);
};

const calculate = () => {
  const prev = parseFloat(previousValue);
  const curr = parseFloat(currentValue);
  if (isNaN(prev) || isNaN(curr)) return;
  let result;
  if (operator === "+") result = prev + curr;
  else if (operator === "-") result = prev - curr;
  else if (operator === "*") result = prev * curr;
  else if (operator === "/") {
    if (curr === 0) {
      currentValue = "Error";
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
