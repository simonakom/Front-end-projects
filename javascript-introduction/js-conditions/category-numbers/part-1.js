// Darbas su sudėtinėmis sąlygomis

// 1. Sąlyga: Generuojamas skaičius tarp 0 ir 99;

// Žemiau pateiktos kategorijos. Sugeneruotas skaičius papuola į
// Vieną iš šių kategorijų. Kiekviena kategorija turi savo operaciją
// Tą operaciją reikia atlikti. Operacijos rezultatas turi būti išspausdintas su console.log();

// Kategorija 1: 0  - 10 - pakelti skaičių kvadratu ir atspausdinti
// Kategorija 2: 11 - 19  - atspausdinti skaičių tokį koks jis yra;
// Kategorija 3: 20 - 49  ir skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
// Kategorija 4: 20 - 49  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
// Kategorija 5: >= 50 ir skaičius dalinasi iš 3 be liekanos: Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
// Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;

// Rezultatas:
// Iškritus bet kuriai sąlygai atspausdinti, kokią sąlygą skaičius atitiko
// PVZ. sugeneruotas skaičius 28:
// Skaičius - 28, Kategorija 3, operacijos rezultatas: 26


// Using fuctions

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function categoryOneCalculation(skaicius) {
	let result = skaicius ** 2;
	return result;
}

function categoryTwoCalculation(skaicius) {
	let result = skaicius ;
	return result;
}

function categoryThrirdCalculation(skaicius) {
    let desimtis = +sk.toString()[0]; 
    // console.log(desimtis) yra lygu pirmas sk skaicius
    let result = skaicius - desimtis;
	return result;
}

function categoryFourthCalculation(skaicius) {
    let vienetai = sk % 10; 
    //  console.log(vienetai) yra lygu antras sk skaicius
     let result = (skaicius + vienetai) / 2;
	return result;
}

function categoryFifthCalculation(skaicius) {
    let a=rand(97,122),b=rand(97,122), c=rand(97,122), d=rand(97,122);
    let result = String.fromCharCode(a) + String.fromCharCode(b) + String.fromCharCode(c) + String.fromCharCode(b);
	return result;
}

let sk = rand(0,99); console.log (sk);


// Kategorija 1: 0  - 10 - pakelti skaičių kvadratu ir atspausdinti
if(sk<= 10) {
    let result = categoryOneCalculation(sk);
    console.log (`Skaičius: ${sk},\t Kategorija: 1,\t Rezultatas: ${result}.`);
}

// Kategorija 2: 11 - 19  - atspausdinti skaičių tokį koks jis yra;
else if (sk<=19) {
    console.log (`Skaičius: ${sk},\t Kategorija: 2,\t Rezultatas: ${categoryTwoCalculation(sk)}.`);
}

// Kategorija 3: 20 - 49  ir skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
else if (sk<=49 && sk % 2 ===0) {
    console.log (`Skaičius: ${sk},\t Kategorija: 3,\t Rezultatas: ${categoryThrirdCalculation(sk)}.`);
}

// Kategorija 4: 20 - 49  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
else if (sk<=49 && sk % 2 !==0) {
     console.log (`Skaičius: ${sk},\t Kategorija: 4,\t Rezultatas: ${categoryFourthCalculation(sk)}.`);
}

// Kategorija 5: >= 50 ir skaičius dalinasi iš 3 be liekanos: Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
else if (sk>=50 && sk % 3 ===0){
    console.log (`Skaičius: ${sk},\t Kategorija: 5,\t Rezultatas: ${categoryFifthCalculation(sk)}.`);
}
 
// Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;
else {
    console.log (`Skaičius ${sk} nepriklauso nei vienai kategorijai`)
}


// // // Not using fuctions

// function rand(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let sk = rand(0, 99); console.log (sk);


// // Kategorija 1: 0  - 10 - pakelti skaičių kvadratu ir atspausdinti
// if(sk<= 10) {
//     let result = sk ** 2;
//     console.log (`Skaičius: ${sk},\t Kategorija: 1,\t Rezultatas: ${result}.`);
// }

// // Kategorija 2: 11 - 19  - atspausdinti skaičių tokį koks jis yra;
// else if (sk<=19) {
//     console.log (`Skaičius: ${sk},\t Kategorija: 2,\t Rezultatas: ${sk}.`);
// }

// // Kategorija 3: 20 - 49  ir skaičius yra lyginis: Skaičiaus dešimtis atimti iš paties skaičiaus ir atspausdinti
// else if (sk<=49 && sk % 2 ===0) {
//     let desimtis = +sk.toString()[0]; 
//     // console.log(desimtis) yra lygu pirmas sk skaicius
//     let result = sk - desimtis;
//     console.log (`Skaičius: ${sk},\t Kategorija: 3,\t Rezultatas: ${result}.`);
// }

// // Kategorija 4: 20 - 49  ir skaičius yra nelyginis: Skaičiaus vienetus pridėti prie paties skaičiaus ir padalinti iš 2. Galiausiai atspausdinti;
// else if (sk<=49 && sk % 2 !==0) {
//     let vienetai = sk % 10; 
//     //  console.log(vienetai) yra lygu antras sk skaicius
//      let result = (sk + vienetai) / 2;
//      console.log (`Skaičius: ${sk},\t Kategorija: 4,\t Rezultatas: ${result}.`);
// }

// // Kategorija 5: >= 50 ir skaičius dalinasi iš 3 be liekanos: Sudarykite atsitiktinį stringą iš 4 raidžių ir jį atspausdinkite
// else if (sk>=50 && sk % 3 ===0){
//     let a=rand(97,122),b=rand(97,122), c=rand(97,122), d=rand(97,122);
//     let result = String.fromCharCode(a) + String.fromCharCode(b) + String.fromCharCode(c) + String.fromCharCode(b);
//     console.log (`Skaičius: ${sk},\t Kategorija: 5,\t Rezultatas: ${result}.`);
// }
 
// // Visais kitais, nepaminėtais atvejais išvesti: skaičius netinkamas nei vienai kategorijai;
// else {
//     console.log (`Skaičius ${sk} nepriklauso nei vienai kategorijai`)
// }

