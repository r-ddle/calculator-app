const display = document.getElementById("display");

function appendToInput(value) {
    display.value += value;
}

function clearInput() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}

function backspace() {
    try{
        display.value = display.value.slice(0, -1);
    }
    catch(error) {
        display.value = "What?"
    }
}