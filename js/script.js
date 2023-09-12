
let numbers = document.getElementsByClassName('btn-number');
let input = document.getElementById('input');
let operators = document.getElementsByClassName('btn-operator');
let equals = document.getElementById('equal');
let reset = document.querySelector('.rest td');

/* Store the current input */
let currentInput = '';
/* Store the current operator */
let currentOperator = '';
/* Store the current calculation */
let calculation = null;

/* Add the listeners to the numbers */
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function () {
        currentInput += this.innerHTML;
        input.innerHTML = currentInput;
    });
}

/* Added listeners to the operators */
for (let i = 0; i < operators.length; i++) {
    let operator = operators[i];
    operator.addEventListener('click', function () {
        /* If the user presses an operator we will need to store the current calculation and operator */
        if (calculation == null) {
            calculation = Number(currentInput);
        } else {
            /*  current operation */
            if (currentOperator == '+') {
                calculation += Number(currentInput);
            } else if (currentOperator == '-') {
                calculation -= Number(currentInput);
            }
        }
        currentOperator = this.innerHTML;
        currentInput = '';
        input.innerHTML = '';
    });
}

/*  equals press */
equals.addEventListener('click', function () {
    /*  current operation */
    if (currentOperator == '+') {
        calculation += Number(currentInput);
    } else if (currentOperator == '-') {
        calculation -= Number(currentInput);
    }
    input.innerHTML = calculation;
    currentInput = '' + calculation;
    calculation = null;
    currentOperator = '';
});
