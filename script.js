

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
let plusminus = document.querySelector("#plusminus");
let comma = document.querySelector("#comma");
let mod = document.querySelector("#mod");

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
let commaOn = false;

zero.addEventListener("click", () => {
    if (commaOn) {
        display.textContent += "0";
        operation += "0";
    } else {
        let currentContent = display.textContent;
        
        if (counter > 0) {
            currentContent += "0";
        } else {
            currentContent = "0";
        }

        display.textContent = currentContent;
        operation += "0";
        counter++;
    }
});

one.addEventListener("click", () => {
    if (commaOn) {
        display.textContent += "1";
        operation += "1";
    } else {
        let currentContent = display.textContent;
        if (counter > 0) {
            currentContent += "1";
        } else {
            currentContent = "1";
        }

        display.textContent = currentContent;
        operation += "1";
        counter++;
    }
});

two.addEventListener("click", () => {
    if (commaOn) {
        display.textContent += "2";
        operation += "2";
    } else {
        let currentContent = display.textContent;
        if (counter > 0) {
            currentContent += "2";
        } else {
            currentContent = "2";
        }

        display.textContent = currentContent;
        operation += "2";
        counter++;
    }
});

three.addEventListener("click", () => {
    if (commaOn) {
        display.textContent += "3";
        operation += "3";
    } else {
        let currentContent = display.textContent;
        if (counter > 0) {
            currentContent += "3";
        } else {
            currentContent = "3";
        }

        display.textContent = currentContent;
        operation += "3";
        counter++;
    }
});

four.addEventListener("click", () => {
    if (commaOn) {
        display.textContent += "4";
        operation += "4";
    } else {
        let currentContent = display.textContent;
        if (counter > 0) {
            currentContent += "4";
        } else {
            currentContent = "4";
        }

        display.textContent = currentContent;
        operation += "4";
        counter++;
    }
});

five.addEventListener("click", () => {
    if (commaOn) {
        display.textContent += "5";
        operation += "5";
    } else {
        let currentContent = display.textContent;
        if (counter > 0) {
            currentContent += "5";
        } else {
            currentContent = "5";
        }

        display.textContent = currentContent;
        operation += "5";
        counter++;
    }
});

six.addEventListener("click", () => {
    if (commaOn) {
        display.textContent += "6";
        operation += "6";
    } else {
        let currentContent = display.textContent;
        if (counter > 0) {
            currentContent += "6";
        } else {
            currentContent = "6";
        }

        display.textContent = currentContent;
        operation += "6";
        counter++;
    }
});

seven.addEventListener("click", () => {
    if (commaOn) {
        display.textContent += "7";
        operation += "7";
    } else {
        let currentContent = display.textContent;
        if (counter > 0) {
            currentContent += "7";
        } else {
            currentContent = "7";
        }

        display.textContent = currentContent;
        operation += "7";
        counter++;
    }
});

eight.addEventListener("click", () => {
    if (commaOn) {
        display.textContent += "8";
        operation += "8";
    } else {
        let currentContent = display.textContent;
        if (counter > 0) {
            currentContent += "8";
        } else {
            currentContent = "8";
        }

        display.textContent = currentContent;
        operation += "8";
        counter++;
    }
});

nine.addEventListener("click", () => {
    if (commaOn) {
        display.textContent += "9";
        operation += "9";
    } else {
        let currentContent = display.textContent;
        if (counter > 0) {
            currentContent += "9";
        } else {
            currentContent = "9";
        }

        display.textContent = currentContent;
        operation += "9";
        counter++;
        }
});

// handle each operation click event

clear.addEventListener("click", () => {
    display.textContent = "0";
    operation = "";
    counter = 0;

    commaOn = false;
});

plus.addEventListener("click", () => {
    operation += "+";
    counter = 0;

    commaOn = false;
});

minus.addEventListener("click", () => {
    operation += "-";
    counter = 0;

    commaOn = false;
});

mult.addEventListener("click", () => {
    operation += "*";
    counter = 0;

    commaOn = false;
});

div.addEventListener("click", () => {
    operation += "/";
    counter = 0;

    commaOn = false;
});

equal.addEventListener("click", () => {
    let arr = cleanData(operation);
    let result = operate(arr[0], arr[1], arr[2]);
    display.textContent = result;

    commaOn = false;
    operation = display.textContent;
});

plusminus.addEventListener("click", () => {
    let helper = parseInt(display.textContent);

    helper *= -1;

    display.textContent = helper;

    commaOn = false;
});

comma.addEventListener("click", () => {
    if (commaOn === false) {
        display.textContent += ".";
    }

    commaOn = true;
});

mod.addEventListener("click", () => {
    let number = parseFloat(display.textContent) / 100;
    display.textContent = number;
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

    if (operator === "+") {
        result = add(valueA, valueB);
    } else if (operator === "-") {
        result = subctration(valueA, valueB);
    } else if (operator === "*") {
        result = multiply(valueA, valueB);
    } else if (operator === "/") {
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