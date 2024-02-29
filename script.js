
let display = document.querySelector(".display");
display.textContent = "0"; 

// reference to each button
let clear = document.querySelector("#c");
let div = document.querySelector("#div");
let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");

// handle each click event
clear.addEventListener("click", () => {
    display.textContent = "0";
});

div.addEventListener("click", () => {

});

zero.addEventListener("click", () => {
    display.textContent = "0";
});

one.addEventListener("click", () => {
    display.textContent = "1";
});

two.addEventListener("click", () => {
    display.textContent = "2";
});

three.addEventListener("click", () => {
    display.textContent = "3";
});

four.addEventListener("click", () => {
    display.textContent = "4";
});

five.addEventListener("click", () => {
    display.textContent = "5";
});

six.addEventListener("click", () => {
    display.textContent = "6";
});

seven.addEventListener("click", () => {
    display.textContent = "7";
});

eight.addEventListener("click", () => {
    display.textContent = "8";
});

nine.addEventListener("click", () => {
    display.textContent = "9";
});


// check the value of the operator and call its own function
function operate(valueA, valueB, operator) {
    switch(operator) {
        case "+":
            add(valueA, valueB);
        case "-":
            subctration(valueA, valueB);
        case "*":
            multiply(valueA, valueB);
        case "/":
            divide(valueA, valueB);
    }
}

function add(firstOP, secOP) {
    return parseInt(firstOP) + parseInt(secOP);
}

function subctration(firstOP, secOP) {
    return parseInt(firstOP) - parseInt(secOP);
}

function multiply(firstOP, secOP) {
    return parseInt(firstOP) * parseInt(secOP);
}

function divide(firstOP, secOP) {
    if (parseInt(secOP) > 0) {
        return parseInt(firstOP) / parseInt(secOP);
    }
    return 0;
}