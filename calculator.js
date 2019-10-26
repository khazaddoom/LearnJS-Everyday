let existingDisplayValue = 0;

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

function displayValue(inputValue) {
    return (existingDisplayValue * 10) + inputValue;
}

function operatorClick(operator, a = existingDisplayValue, b) {
    switch (operator) {
        case '+':
            add(a, b);
            break;
    
        default:
            break;
    }
}



