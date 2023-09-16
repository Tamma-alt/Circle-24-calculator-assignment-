let currentOperand = "";
let previousOperand = "";
let currentOperator = null;

let numbers = document.querySelectorAll(".btn-number");
let input = document.getElementById("input");
let operators = document.getElementsByClassName("btn-operator");
let equals = document.querySelector(".equal");
let reset = document.querySelector(".rest td");
let mainReset = document.querySelector(".reset-btn");
let clear = document.querySelector(".clear");
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
        } else if (currentOperator === "/") {
          calculation = num1 / num2;
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
    } else if (currentOperator === "/") {
        if (num2 === 0) {
          input.innerHTML = "Infinity";
          return;
        }
      calculation = num1 / num2;
    }
    input.innerHTML = calculation;
    currentOperand = "" + calculation;
    currentOperator = "";
    previousOperand = "";
  }
  // input.innerHTML = calculation;
  // currentOperand = "" + calculation;
  // currentOperator = "";
  // previousOperand = "";
  calculation = "";

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

/* function for the reset button */

mainReset.addEventListener("click", function () {
  input.textContent = "";
  input.innerHTML = "";
  currentOperand = "";
  currentOperator = "";
  previousOperand = "";
});


// theme switcher

let toggler = document.querySelector('.toggle-btn');

toggler.addEventListener('click', () => {
  let numbers = document.querySelectorAll('.btn-number');
  let operators = document.querySelectorAll('.btn-operator');
  let body = document.body;
  let display =  document.querySelector('.display');
  let toggle_bg = document.querySelector('.toggle'); 
  let buttons = document.querySelector('.buttons');
  let table = document.querySelector(".table")
  let headings = document.querySelectorAll(".heading")


  body.classList.toggle("theme-2-body")
  display.classList.toggle("theme-2-display")
  input.classList.toggle("theme-2-input")
  toggle_bg.classList.toggle("theme-2-toggle")
  toggler.classList.toggle("theme-2-toggle-btn")
  buttons.classList.toggle("theme-2-buttons")
  mainReset.classList.toggle("theme-2-reset-btn")
  table.classList.toggle("theme-2-table")
  clear.classList.toggle("theme-2-clear")
  equals.classList.toggle("theme-2-equal")

  headings.forEach((heading) => {
    heading.classList.toggle("theme-2-h4")
  })
  operators.forEach((operator) => {
    operator.classList.toggle("theme-2-btn-operator")
  })
  numbers.forEach((number) => {
    number.classList.toggle("theme-2-btn-number")
  })
})