
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
    if (secOP > 0) {
        return firstOP / secOP;
    }
    return 0;
}