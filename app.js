const screenDisplay = document.querySelector('.screen')   // . looks for a class name
const buttons = document.querySelectorAll('button')

let calculation = []
let acumulativeCalculation

function calculate(button) {
    const value = button.textContent
    if (value === "CLEAR") {
        calculation = []
        screenDisplay.textContent = '.'
    } else if (value === "=") {
        console.log(acumulativeCalculation)
        screenDisplay.textContent = eval (acumulativeCalculation)   // runs the calculation
    } else {
        calculation.push(value)               // pushes clicked value to an array
        acumulativeCalculation = calculation.join('')
        screenDisplay.textContent = acumulativeCalculation
    
    }
}


buttons.forEach(button => button.addEventListener('click', () => calculate(button)))  //callback function