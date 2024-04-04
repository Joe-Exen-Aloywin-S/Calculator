function clearDisplay() {
    document.getElementById('display').value = '';
}
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function calculateResult() {
    const displayValue = document.getElementById('display').value;
    const result = eval(displayValue);
    document.getElementById('display').value = result;
}
function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}