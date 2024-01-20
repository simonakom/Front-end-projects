// Antras variantas

// Kategorija 1: 0 – 5. skaičius dauginamas iš 3
// Kategorija 2: 6 – 15. iš skaičiaus atsiima 4 ir rezultatas pakeliamas kvadratu
// Kategorija 3: 16 - 30 ir dalijasi iš 5. Prie skaičiaus pridedame 10
// Kategorija 4: 31 - 45 ir skaičius nelyginis. Skaičių atimame iš 100
// Kategorija 5: 46 – 99 ir skaičiai pasibaigiantys 6 arba 7. Skaičių daliname iš 4


// Using fuctions

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function categoryOneCalculation(number) {
	let result=number * 3;
	return result;
}
function categoryTwoCalculation(number) {
    let result = (sk - 4) ** 2
	return result;
}
function categoryThreeCalculation(number) {
    let result = (sk + 10)
	return result;
}
function categoryFourCalculation(number) {
    let result = (100-sk)
	return result;
}
function categoryFiveCalculation(number) {
    let result = (sk/4)
	return result;
}

let sk = rand(0, 99); console.log (sk);


if(sk<=5) {
    console.log (`Skaičius: ${sk},\t Kategorija: 1,\t Rezultatas: ${categoryOneCalculation(sk)}`)
}
else if (sk<=15) {
    console.log (`Skaičius: ${sk},\t Kategorija: 1,\t Rezultatas: ${categoryTwoCalculation(sk)}`)
}
else if (sk<=30 && sk%5===0 ) {
    console.log (`Skaičius: ${sk},\t Kategorija: 3,\t Rezultatas: ${categoryThreeCalculation(sk)}.`);
}
else if (sk<=45 && sk%2!==0) {
    console.log (`Skaičius: ${sk},\t Kategorija: 4,\t Rezultatas: ${categoryFourCalculation(sk)}.`);
}
else if (sk<=99 && +sk.toString()[1]===6 || +sk.toString()[1]===7) {
    console.log (`Skaičius: ${sk},\t Kategorija: 5,\t Rezultatas: ${categoryFiveCalculation(sk)}.`);
}
    
// // Not using fuctions

// function rand(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let sk = rand(46, 80);
// console.log (sk);


// if(sk<=5) {
//     let result = sk * 3;
//     console.log (`Skaičius: ${sk},\t Kategorija: 1,\t Rezultatas: ${result}.`);
// }

// else if (sk<=15) {
//     let result = (sk - 4) ** 2
//     console.log (`Skaičius: ${sk},\t Kategorija: 2,\t Rezultatas: ${result}.`);
// }

// else if (sk<=30 && sk%5===0 ) {
//     let result = (sk + 10)
//     console.log (`Skaičius: ${sk},\t Kategorija: 3,\t Rezultatas: ${result}.`);
// }

// else if (sk<=45 && sk%2!==0) {
//     let result = (100-sk)
//     console.log (`Skaičius: ${sk},\t Kategorija: 4,\t Rezultatas: ${result}.`);
// }

// else if (sk<=99 && +sk.toString()[1]===6 || +sk.toString()[1]===7) {
//     let result = (sk/4)
//     console.log (`Skaičius: ${sk},\t Kategorija: 5,\t Rezultatas: ${result}.`);
// }
    

