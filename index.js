let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")
let sumEl = document.getElementById("sum-el")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
let num1 = parseFloat(num1El.value)
let num2 = parseFloat(num2El.value)
let sum = num1 + num2
sumEl.textContent = "Sum: " + sum
}

function subtract() {
    let num1 = parseFloat(num1El.value)
    let num2 = parseFloat(num2El.value)
    let sum = num1 - num2
    sumEl.textContent = "Sum: " + sum
}

function divide() {
    let num1 = parseFloat(num1El.value)
    let num2 = parseFloat(num2El.value)
    let sum = num1 / num2
    sumEl.textContent = "Sum: " + sum
}

function multiply() {
    let num1 = parseFloat(num1El.value)
    let num2 = parseFloat(num2El.value)
    let sum = num1 * num2
    sumEl.textContent = "Sum: " + sum
}