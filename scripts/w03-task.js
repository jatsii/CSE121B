/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add( number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let num1 = Number(document.querySelector('#add1').value);
    let num2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(num1, num2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract( number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let num1 = Number(document.querySelector('#subtract1').value);
    let num2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(num1, num2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
}

const multiplyNumbers = () => {
    let num1 = Number(document.querySelector('#factor1').value);
    let num2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(num1, num2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
    return number1 / number2;
}

const divideNumbers = () => {
    let num1 = Number(document.querySelector('#dividend').value);
    let num2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(num1, num2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const getTotal =() => {
    let totalSpan = Number(document.querySelector('#subtotal').value);
    let check = document.getElementById('member');

    if(check.checked){
        totalSpan = totalSpan - (totalSpan * 0.15); 
    }
    
    document.getElementById('total').innerHTML = `${totalSpan}`; 
    console.log(totalSpan);
}

document.querySelector('#getTotal').addEventListener('click', getTotal);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let numbers = document.getElementById('array');
numbers.innerHTML =`${array}`;

/* Output Odds Only Array */
const odd = array.filter(num => num % 2 == 1);
let oddNum = document.getElementById('odds');
oddNum.innerHTML =`${odd}`;

/* Output Evens Only Array */
const even = array.filter(num => num % 2 == 0);
let evenNum = document.getElementById('evens');
evenNum.innerHTML =`${even}`;

/* Output Sum of Org. Array */
const initialValue = 0;
document.getElementById('sumOfArray').innerHTML = array.reduce((acumulator, currentValue) => acumulator + currentValue, initialValue,);

/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerHTML = array.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
const initialValueOfMultiplied = 0;
let newArray = array.map(num => num * 2);
document.getElementById('sumOfMultiplied').innerHTML = newArray.reduce((acumulator, currentValue) => acumulator + currentValue, initialValueOfMultiplied,);

