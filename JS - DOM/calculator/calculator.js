// Skaičiuotuvas: Vartotojui pateikiami du įvesties laukai, o tarp jų <select> elementas. Modeliuojamas skaičiuotuvo veikimas. <select> elemente atvaizduojami šie veiksmai:
// 	+ (sudėtis)
//    	- (atimtis)
//    	* (daugyba)
//    	/ (dalyba)
// 	xy (kėlimas laipsniu)
 
// Vartotojui paspaudus mygtuką „Apskaičiuoti“ programa turi apskaičiuoti vartotojo įvestą matematinį veiksmą bei išvesti rezultatą vartotojui. Jei veiksmas, pirmasis arba antrasis skaičius nėra įvestas – programa turi tai pranešti vartotojui. Taipogi galite atlikti validaciją dėl netinkamų matematinių veiksmų. (dalyba iš 0 ir t.t.)
// Pro tip: tam, kad nuskaityti select įvesties reikšmę, naudokite element.value;
// Rekomendacija: Tam, kad prisiminti HTML ir CSS, stilizuokite skaičiuotuvą;


function calculate() {
    let firstNumber = parseFloat(document.querySelector (`#num1`).value);
    let secondNumber = parseFloat(document.querySelector (`#num2`).value);
    let result = document.querySelector (`#result`);

    let operation = document.querySelector (`#operation`).value;

    // console.log (firstNumber, secondNumber, operation)
    // console.log (typeof firstNumber, typeof secondNumber)

if ( isNaN(firstNumber) || isNaN(secondNumber) ) {
    result.innerText = 'Action is impossible. All numbers are not entered';
    return;
}

if(operation === `+`) result.innerText = `Result = ${firstNumber+secondNumber}`;
// if(operation === `+`){
// let final = firstNumber + secondNumber;
// result.innerText = `Result = ${final}`;
// }
else if(operation === `-`) result.innerText = `Result = ${firstNumber-secondNumber}`;
else if(operation === `*`) result.innerText = `Result = ${firstNumber*secondNumber}`;
else if(operation === `/` && secondNumber !== 0 ) result.innerText = `Result = ${firstNumber/secondNumber}`;

else if(operation === `/`) {
    if (secondNumber !== 0)
    {result.innerText = `Result = ${firstNumber/secondNumber}`}
    else {result.innerText = `One of numbers is 0. Cannot divide by 0`}; 
    // 0/3=0 3/0=error
}

else if(operation === `**`) {
    if (firstNumber===0 && secondNumber<=0) 
    {result.innerText = `One of numbers is 0. Squared action not possible`;} 
    // Jei pirmas skaicius yra nulis o kitas yra negatyvus skaicius, negalime atlikti operacijos
    else { result.innerText = `Result = ${firstNumber**secondNumber}`};
} 
}
