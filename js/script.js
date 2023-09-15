let currentOperand = "";
let previousOperand = "";
let currentOperator = null;

let numbers = document.querySelectorAll(".btn-number");
let input = document.getElementById("input");
let operators = document.getElementsByClassName("btn-operator");
let equals = document.getElementById("equal");
let reset = document.querySelector(".rest td");
let clear = document.getElementById("clear");
/* Store the current input */
let currentInput = "";
/* Store the current operator */
// let currentOperator = '';
/* Store the current calculation */
let calculation = null;

// Function to update the display
function updateDisplay() {
  input.innerText =
    previousOperand +
    (currentOperator ? " " + currentOperator : "") +
    (currentOperand ? " " + currentOperand : "");
}

// Function to append a digit to the current operand
function appendNumber(number) {
  currentOperand += number;
  updateDisplay();
}

/* Add the listeners to the numbers buttons */
numbers.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
  });
});

/* Added listeners to the operators */
for (let i = 0; i < operators.length; i++) {
  let operator = operators[i];
  operator.addEventListener("click", function () {
    /* If the user presses an operator we will need to store the current calculation and operator */
    if (currentOperand !== "") {
      if (previousOperand === "") {
        previousOperand = currentOperand;
      } else {
        /*  current operation */
        const num1 = Number(previousOperand);
        const num2 = Number(currentOperand);
        if (currentOperator === "+") {
          calculation = num1 + num2;
        } else if (currentOperator === "-") {
          calculation = num1 - num2;
        } else if (currentOperator === "*") {
          calculation = num1 * num2;
        }
        previousOperand = calculation;
      }

      currentOperator = this.innerHTML;
      currentOperand = "";
      //   input.innerHTML = "";
      updateDisplay();
    }
  });
}

/*  equals press */
equals.addEventListener("click", function () {
  /*  current operation */
  if (currentOperand !== "") {
    const num1 = Number(previousOperand);
    const num2 = Number(currentOperand);
    if (currentOperator === "+") {
      calculation = num1 + num2;
    } else if (currentOperator === "-") {
      calculation = num1 - num2;
    } else if (currentOperator === "*") {
      calculation = num1 * num2;
    }
  }
  input.innerHTML = calculation;
  currentOperand = "" + calculation;
  currentOperator = "";
  previousOperand = "";

  updateDisplay();
});

// ...

/* Add a listener to the backspace button */

clear.addEventListener("click", function () {
  if (currentOperand) {
    currentOperand = currentOperand.slice(0, -1);
  } else if (currentOperator) {
    currentOperator = null;
  } else if (previousOperand) {
    previousOperand = "";
  }
  updateDisplay();
});

updateDisplay();
