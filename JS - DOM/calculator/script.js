function appendNumberToActiveInput(number) {
    let operationValue = document.getElementById('operation').value;
    let activeInputId = (operationValue === '+' || operationValue === '-' || operationValue === '*' || operationValue === '/' || operationValue === '**') ? 'num2' : 'num1';
    document.getElementById(activeInputId).value += number;
}

function calculate() {
    let firstNumber = parseFloat(document.querySelector (`#num1`).value);
    let secondNumber = parseFloat(document.querySelector (`#num2`).value);
    let result = document.querySelector (`#result`);
    let info = document.querySelector (`#info`);
    let selectElement = document.getElementById("operation");
    let operation = document.querySelector (`#operation`).value;
    let calculate = document.querySelector (`.calc`)
    let again = document.querySelector (`.again`)
    // console.log (firstNumber, secondNumber, operation)
    // console.log (typeof firstNumber, typeof secondNumber)

if ( isNaN(firstNumber) || isNaN(secondNumber) ) {
    result.style.display = 'block';
    result.innerText = 'Action is impossible.\n Please, enter all numbers!';
    return;
}
if (!selectElement || selectElement.selectedIndex <= 0) {
    result.style.display = 'block';
    result.innerText = 'Action is impossible.\nPlease, select a symbol!';
    return;
}
if(operation === `+`) {
    result.style.display = 'block';
    result.innerText = `Result:\n ${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`;
} 
// if(operation === `+`){
// let final = firstNumber + secondNumber;
// result.innerText = `Result = ${final}`;
// }
else if(operation === `-`){
    result.style.display = 'block';
    result.innerText = `Result:\n ${firstNumber} - ${secondNumber}  = ${firstNumber-secondNumber}`;
} 
else if(operation === `*`){
    result.style.display = 'block';
    result.innerText = `Result:\n ${firstNumber} * ${secondNumber}  = ${firstNumber*secondNumber}`;
} 
else if(operation === `/` && secondNumber !== 0 ){
    result.style.display = 'block';
    result.innerText = `Result:\n ${firstNumber} / ${secondNumber}  = ${firstNumber/secondNumber}`;
} 
else if(operation === `/`) {
    if (secondNumber !== 0){
        result.style.display = 'block';
        result.innerText = `Result:\n ${firstNumber} / ${secondNumber}  = ${firstNumber/secondNumber}`}
    else {
        result.style.display = 'block';
        result.innerText = `One of numbers is 0.\n Cannot divide by 0`}; 
    // 0/3=0 3/0=error
}
else if(operation === `**`) {
    if (firstNumber===0 && secondNumber<=0) {
        result.style.display = 'block';
        result.innerText = `Both numbers are 0.\n Squared action not possible`;} 
    //Jei pirmas skaicius yra nulis o kitas yra negatyvus skaicius, negalime atlikti operacijos
    else { 
        result.style.display = 'block';
        result.innerText = `Result  = ${firstNumber**secondNumber}`};
    } 

    // Reset individual input fields
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num1').placeholder = 'Number 1';
    document.getElementById('num2').placeholder = 'Number 2';
    document.getElementById('select').textContent = '↓';

    info.style.display = 'none';
    calculate.style.display = 'none';
    again.style.display = 'block';
}

function again() {
    location.reload();
  }
  
// (max-width: 540px)
if (window.matchMedia("(max-width: 540px)").matches) {
    document.getElementById('num1').placeholder = '#';
    document.getElementById('num2').placeholder = '#';
    document.getElementById('select').textContent = '↓';
  } else {
    document.getElementById('num1').placeholder = 'Number 1';
    document.getElementById('num2').placeholder = 'Number 2'
    document.getElementById('defaultOption').textContent = 'Choose...';
  }



