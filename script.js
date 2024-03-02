
let display = document.querySelector(".display");
display.textContent = "0"; 

let operation = "";

// reference to each operation button

let clear = document.querySelector("#c");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let mult = document.querySelector("#mult");
let equal = document.querySelector("#equal");
let div = document.querySelector("#div");

// reference to each digit button

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

// handle each digit click event

let counter = 0;


zero.addEventListener("click", () => {
    let currentContent = display.textContent;
    if (counter > 0) {
        currentContent += "0";
    } else {
        currentContent = "0";
    }

    display.textContent = currentContent;
    operation += "0";
    counter++;
});

one.addEventListener("click", () => {
    let currentContent = display.textContent;
    if (counter > 0) {
        currentContent += "1";
    } else {
        currentContent = "1";
    }

    display.textContent = currentContent;
    operation += "1";
    counter++;
});

two.addEventListener("click", () => {
    let currentContent = display.textContent;
    if (counter > 0) {
        currentContent += "2";
    } else {
        currentContent = "2";
    }

    display.textContent = currentContent;
    operation += "2";
    counter++;
});

three.addEventListener("click", () => {
    let currentContent = display.textContent;
    if (counter > 0) {
        currentContent += "3";
    } else {
        currentContent = "3";
    }

    display.textContent = currentContent;
    operation += "3";
    counter++;
});

four.addEventListener("click", () => {
    let currentContent = display.textContent;
    if (counter > 0) {
        currentContent += "4";
    } else {
        currentContent = "4";
    }

    display.textContent = currentContent;
    operation += "4";
    counter++;
});

five.addEventListener("click", () => {
    let currentContent = display.textContent;
    if (counter > 0) {
        currentContent += "5";
    } else {
        currentContent = "5";
    }

    display.textContent = currentContent;
    operation += "5";
    counter++;
});

six.addEventListener("click", () => {
    let currentContent = display.textContent;
    if (counter > 0) {
        currentContent += "6";
    } else {
        currentContent = "6";
    }

    display.textContent = currentContent;
    operation += "6";
    counter++;
});

seven.addEventListener("click", () => {
    let currentContent = display.textContent;
    if (counter > 0) {
        currentContent += "7";
    } else {
        currentContent = "7";
    }

    display.textContent = currentContent;
    operation += "7";
    counter++;
});

eight.addEventListener("click", () => {
    let currentContent = display.textContent;
    if (counter > 0) {
        currentContent += "8";
    } else {
        currentContent = "8";
    }

    display.textContent = currentContent;
    operation += "8";
    counter++;
});

nine.addEventListener("click", () => {
    let currentContent = display.textContent;
    if (counter > 0) {
        currentContent += "9";
    } else {
        currentContent = "9";
    }

    display.textContent = currentContent;
    operation += "9";
    counter++;
});

// handle each operation click event

clear.addEventListener("click", () => {
    display.textContent = "0";
    operation = "";
    counter = 0;
});

plus.addEventListener("click", () => {
    operation += "+";
    counter = 0;
});

minus.addEventListener("click", () => {
    operation += "-";
    counter = 0;
});

mult.addEventListener("click", () => {
    operation += "*";
    counter = 0;
});

div.addEventListener("click", () => {
    operation += "/";
    counter = 0;
});

equal.addEventListener("click", () => {
    console.log(operation);
    let arr = cleanData(operation);
    let result = operate(arr[0], arr[1], arr[2]);
    display.textContent = result;
});

// clear operation data

function cleanData(string) {
  //  let operator = "";
    let arr = ["0", "0", "+"];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "+") {
            arr = string.split(string[i]);
            arr.push(string[i]);
            break;
        }

        if (string[i] === "-") {
            arr = string.split(string[i]);
            arr.push(string[i]);
            break;
        }

        if (string[i] === "*") {
            arr = string.split(string[i]);
            arr.push(string[i]);
            break;
        }

        if (string[i] === "/") {
            arr = string.split(string[i]);
            arr.push(string[i]);
            break;
        }
    }
    return arr;
}

// check the value of the operator and call its own function
function operate(valueA, valueB, operator) {
    let result = 0;
    console.log(valueA, valueB, operator);
    switch(operator) {
        case "+":
            result = add(valueA, valueB);
        case "-":
            result = subctration(valueA, valueB);
        case "*":
            result = multiply(valueA, valueB);
        case "/":
            result = divide(valueA, valueB);
    }
    return result;
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
    return "ERROR";
}