let num1 = "", num2 = "", operator = "";
let calcPerformed = false;

const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
display.value = "0";

const NUMS = "0123456789.";
const OPERATORS = "/*-+"

calculator.addEventListener("click", (event) => {
    let button = event.target.id;
    if(button === "") return;
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
        if(num2 != "") {
            num1 = operate(+num1, +num2, operator);
            num2 = "";
            display.value = num1;
        }
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
    else if(button === "+/-") {
        if(num2 === "") {
            num1 = num1 === "" ? "" : num1 * -1;
            display.value = +num1;
        }
        else {
            num2 = num2 === "" ? "" : num2 * -1;
            display.value = +num2;
        }
    }

    console.log(button);
});


function operate(num1, num2, operator) {
    let result;
    if(operator === "+") result = add(num1, num2);
    else if(operator === "-") result = subtract(num1, num2);
    else if(operator === "*") result = multiply(num1, num2);
    else result = divide(num1, num2);

    return result.toFixed(10) / 1;
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