function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid expression');
    }
}

// 🆕 Add keyboard support
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
                         '+', '-', '*', '/', '.', '(', ')'];

    if (allowedKeys.includes(key)) {
        appendValue(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault(); // Prevent form submission
        calculate();
    } else if (key === 'Backspace') {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1); // Remove last char
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});
