let num1 = "", num2 = "", operator = "";
let calcPerformed = false;

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
display.value = "0";

const NUMS = "0123456789.";
const OPERATORS = "/*-+"

calculator.addEventListener("click", (event) => {
    let button = event.target.id;
    if(NUMS.includes(button)) {
        if(operator === "") {
            if(!calcPerformed)
                num1 += button;
            else
                num1 = button;
            calcPerformed = false;
            display.value = num1;
        }
        else {
            num2 += button;
            display.value = num2;
        }
    }
    else if(OPERATORS.includes(button) ) {
        operator = button;
    }
    else if(button === "=" && operator != "" && num2 != "") {
        num1 = operate(+num1, +num2, operator);
        num2 = "";
        operator = "";
        display.value = num1;
        calcPerformed = true;
    }
    else if(button === "clear") {
        num1 = "";
        num2 = "";
        operator = "";
        calcPerformed = false;
        display.value = "0";
    }
});


function operate(num1, num2, operator) {
    if(operator === "+") return add(num1, num2);
    if(operator === "-") return subtract(num1, num2);
    if(operator === "*") return multiply(num1, num2);
    return divide(num1, num2);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}