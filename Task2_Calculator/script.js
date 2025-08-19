
const display = document.getElementById("display");
let addOperator = (operator) => {
    display.value += operator;
}


let addNumber = (number) => {
    display.value += number;
}

let clearScreen = () => {
    display.value = " ";
}

let result = () => {
    let operation = display.value;
    try {
        let output = eval(operation);
        display.value = output;
        const ul = document.getElementById("historyList");
        const li = document.createElement('li');
        li.textContent = `${operation} = ${output}`;
        ul.prepend(li);
    } catch {
        operation = "Error";
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if(!isNaN(key) || '()/*+-%'.includes(key))
        display.value += key;
    else if (key === "Escape")
        clearScreen();
    else if (key === "Enter") {
        event.preventDefault();
        result();
    }
    else if (key === "Backspace")
        display.value = display.value.slice(0, -1);
});