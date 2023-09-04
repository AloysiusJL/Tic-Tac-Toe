let input = ''; // User input string
let result = null; // Result of the calculation
let lastOperator = null; // Last operator clicked
let lastClicked = null; // ID of the last clicked button

const screen1 = document.getElementById('result');
const screen2 = document.getElementById('input');

const buttons = document.querySelectorAll('button');

// Add event listener to all buttons
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = button.textContent;
        lastClicked = button.id;

        if (value.match(/[0-9]/)) {
            // Number button clicked
            input += value;
            updateScreen();
        } else if (value === '.') {
            // Decimal point button clicked
            if (!input.includes('.') && !input.endsWith('.')) {
                input += value;
                updateScreen();
            }
        } else if (value === '=') {
            // Equal button clicked
            calculate();
        } else if (value === 'C') {
            // Clear button clicked
            clear();
        } else if (value === 'CE') {
            // Clear Entry button clicked
            clearEntry();
        } else if (value === 'Delete') {
            // Delete button clicked
            deleteLastCharacter();
        } else if (value === '%' && input) {
            // Percentage button clicked
            input = String(parseFloat(input) / 100);
            updateScreen();
        } else if (value === '+/-' && input && input.length > 0 && !isNaN(input)) {
            // Toggle Sign button clicked only if there's input
            input = String(-parseFloat(input));
            updateScreen();
        } else if (value.match(/[\+\-\*\/]/)) {
            // Operator button clicked
            if (lastOperator && lastClicked !== 'equal' && input.trim().endsWith(lastOperator)) {
                // Replace the previous operator with the new one
                input = input.trim().slice(0, -1) + value + ' ';
            } else {
                input += ' ' + value + ' ';
            }
            lastOperator = value;
            updateScreen();
        }
    });
});

function updateScreen() {
    screen2.textContent = input;
}

function clear() {
    input = '';
    result = null;
    lastOperator = null;
    updateScreen();
    screen1.textContent = '';
}

function clearEntry() {
    input = '';
    updateScreen();
}

function deleteLastCharacter() {
    input = input.slice(0, -1);
    updateScreen();
}

function calculate() {
    try {
        result = eval(input);
        if (!isNaN(result)) {
            input = String(result);
            updateScreen();
            screen1.textContent = '';
        } else {
            input = 'Error';
            updateScreen();
            clear();
        }
    } catch (error) {
        input = 'Error';
        updateScreen();
        clear();
    }
}
