/*
1. Sukurti funkciją, kuri generuoja x kiekį atsitiktinių skaičiu nuo min iki max reikšmės
2. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
3. Išrūšiuoti String'ų masyvą didėjančia tvarka;
4. Išrūšiuoti tą patį masyvą mažėjančia tvarka;
5. Sukurti masyvą iš 100 elementų, sudarytą iš skaičių nuo -100 iki 200;
6. Patikrinti ar skaičius 68 egzistuoja masyve. Ar egzistuoja skaičius - praneškite pasinaudodami console.log()
7. Išrūšiuoti masyvą didėjančia tvarka;
8. Išrūšiuoti masyvą mažėjančia tvarka;
9. Atrasti didžiausią bei mažiausią reikšmes skaičių masyve.
10. Apskaičiuoti visų skaičių vidurkį;
*/

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1. Sukurti funkciją, kuri generuoja x kiekį atsitiktinių skaičiu nuo min iki max reikšmės
const generateRandomNumbersArray = (length, min, max) => {
    const arr = [];
    for(let i = 0; i<length; i++){
        arr.push(rand(min,max));
    }
return arr;
}

// 2. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
const generateString = (length) => {
    let str= "";
    for (let i = 0; i<length; i++){
        str += String.fromCharCode(rand(65,90));
    }
    return str;
}  
console.log(`2. Random String - length 4:\n ${generateString(4)}`)

const stringArray = [];
for (let i = 0; i<100; i++){
    stringArray.push(generateString(4));
}
console.log(`2. Array with 100 strings(length-4):\n ${stringArray}`)
 
// 3. Išrūšiuoti String'ų masyvą didėjančia tvarka;
stringArray.sort()
console.log(`3. Ascending order\n ${stringArray}`)

// 4. Išrūšiuoti tą patį masyvą mažėjančia tvarka;
stringArray.sort().reverse();
console.log(`4. Descending order\n ${stringArray}`)  

// 5. Sukurti masyvą iš 100 elementų, sudarytą iš skaičių nuo -100 iki 200;
const numbersArray = generateRandomNumbersArray(100, -100, 200);
console.log(`5 Array with 100 elements(-100;200):\n ${numbersArray}`)  

// 6. Patikrinti ar skaičius 68 egzistuoja masyve. Ar egzistuoja skaičius - praneškite pasinaudodami console.log()
if(numbersArray.includes(68)){
    console.log(`6.\n Number 68 exists in array "numbersArray`)
} else {
    console.log (`6.\n Number 68 doesn't exists in array "numbersArray`)
}

// 7. Išrūšiuoti masyvą didėjančia tvarka;
numbersArray.sort((num1, num2)=>{
    return num1-num2;
});
console.log(`7.Ascending order\n ${numbersArray}`);

// 8. Išrūšiuoti masyvą mažėjančia tvarka;
// numbersArray.reverse();
numbersArray.sort((num1, num2)=>{
    return num2-num1;
});
console.log(`8.Descending order\n ${numbersArray}`);

// 9. Atrasti didžiausią bei mažiausią reikšmes skaičių masyve.
 let max= -1000,
     min=1000;

 for(let value of numbersArray)
 {
    if(value> max ){
        max=value;
    }
    if(value<min)
    {
        min=value;
    }
 }
console.log(`9. Min array value:\n ${min}`);
console.log(`9. Max array value:\n ${max}`);

// let min = Math.min(...numbersArray);
// let max = Math.max(...numbersArray);
// console.log(`9. Min array value:\n ${min}`);
// console.log(`9. Max array value:\n ${max}`);


// 10. Apskaičiuoti visų skaičių vidurkį;
let total = 0;
for (let i = 0; i < numbersArray.length; i++) {
    total += numbersArray[i];
}
let average = total / numbersArray.length;

console.log(`10. Average: ${average}`);


console.log(`--------------------------------------------------------------------------`);

/*
1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A iki Z. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;
2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio elemento pozicija masyve bei  reikšmė;
3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'
4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;
5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti mažėjančia tvarka.
6. Kiekvienai stringų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;
7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abėcėlę didėjančia tvarka
8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Sugeneruokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS; Išveskite, kiek kartų reikėjo generuoti reikšmes kol buvo gautas toks žodis.
9. Išrikiuokite masyvą priešinga nei abecelės tvarka
10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'
*/

// 1.Sukurti funkciją, kuri generuoja x kiekį atsitiktinių string'ų, sudarytą iš strLength simbolių. Generavimas nuo A iki Z. Sukurti masyvą iš 100 elementų, sudarytą iš String'ų, kurių ilgis yra 4 simboliai;

// generates random string of a specified length. It iterates length times, and in each iteration, it adds a random uppercase letter to the strngs variable.
const randomString = (length) => {
    let str = "";
    for (let i = 0; i < length; i++) {
        str += String.fromCharCode(rand(65, 90));
    }
    return str;
}
console.log(`1. Random String - length 4:\n %c${randomString(4)}`, 'color: green');

// A loop is used to create an array arrayForString containing 100 elements. In each iteration, it calls the randomString function with 4 as the length argument, generating a random string of length 4, and then adds that string to the array.
const arrayForString = [];
for (let i = 0; i < 100; i++) {
	arrayForString.push(randomString(4));
}
console.log(`1. Array with 100 strings(length-4):\n %c${arrayForString}`, 'color: green');


// 2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio elemento pozicija masyve bei  reikšmė;
let matchingElementFound = false;

for (let value of arrayForString){
    if (value.charAt(0) === 'A' && value.charAt(3) === 'A'){
        console.log(`2. Array has value that starts and ends with "A".\n Position: %c${arrayForString.indexOf(value)}. Value: %c${value}`, 'color: green', 'color: green');
        matchingElementFound = true;
        break;
    } 
}

if (!matchingElementFound) {
        console.log(`2. Array doesn't have value that starts and ends with "A"`);
    }

// 3. Išfiltruokite visas masyvo reikšmes, pasidedančias raidėmis: 'X', 'M', 'K'
const filteredValueXmk = arrayForString.filter(value => value.startsWith('X') || value.startsWith('M') || value.startsWith('K'));

if (filteredValueXmk.length > 0) {
    console.log(`3. Filtered values that start with 'X', 'M' arba 'K':\n %c${filteredValueXmk}`, 'color: green');
} else {
    console.log("3. No filtered values, that start with  'X', 'M' arba 'K'.");
}

// let filteredValueXmk = [];
// for (let value of arrayForString){
//     if (value.charAt(0) === 'X' || value.charAt(0) === 'M' || value.charAt(0) === 'K')
//     filteredValueXmk.push(value);
// }
// console.log(`3. Filtered values that start with 'X', 'M' arba 'K':\n ${filteredValueXmk}`);


// 4. Išfiltruokite visas masyvo reikšmes, kurių viduriniai du simboliai yra vienodi. Sukurkite išfiltruotų reikšmių masyvą;
const filteredValueMid = arrayForString.filter((value) => {
    return value[1] === value[2];
});

if (filteredValueMid.length > 0) {
    console.log(`4. Values filtered where middle two characters are the same:\n %c${filteredValueMid}`, 'color: green');
} else {
    console.log("4. No filtered values with the middle two characters being the same.");
}

// 5. Jei išfiltruotų reikšmių masyve reikšmių mažiau nei 3 - rikiuoti didėjančia, kitu atveju - rikiuoti mažėjančia tvarka.
if (filteredValueMid.length < 3) {
    filteredValueMid.sort();
} else {
    filteredValueMid.sort().reverse();
}

if (filteredValueMid.length > 0) {
    console.log(`5. Sorted values from (4.) based on the condition:\n %c${filteredValueMid}`, 'color: green');
} else {
    console.log("5. No values to display after sorting.");
}

// 6. Kiekvienai stringų masyvo reikšmei pridėti po dar vieną atsitiktinę raidę gale;
const randLetter = [];
for (let value of filteredValueMid){
    randLetter.push(value + randomString(1))
}
// randLetter = filteredValueMid.map((value) => value + generateString(1))

console.log(`6. New letter added  to the end of each string of array from (4.)\n %c${randLetter}`, 'color: green');

// 7. Kiekvieną stringų masyvo elementų reikšmę išrikiuoti pagal abėcėlę didėjančia tvarka
let sortAlfb = filteredValueMid.map(value => value.split('').sort().join(''))

console.log(`7. Sort each string in the array from (4.) alphabetically:\n %c${sortAlfb}`, 'color: green');
console.log(`7. Sort array from (4.) alphabetically:\n %c${sortAlfb.sort()}`, 'color: green');


// 8. Sukurkite naują masyvą atsitiktinėms Sring'ų reikšmėms generuoti. Sugeneruokite atsitiktines String reikšmes iš 4 simbolių tol, kol jame bus žodis XMAS; Išveskite, kiek kartų reikėjo generuoti reikšmes kol buvo gautas toks žodis.
let attempts = 0
let arrayXmas = []

while (true) {
    const randomStringUntilXmas = generateString(4);
    
    if (randomStringUntilXmas === "XMAS") {
        arrayXmas.push(randomStringUntilXmas) 
       break
    }
    else {
        arrayXmas.push(randomStringUntilXmas) 
        attempts++;
    }
}

console.log(`8. Array that includes "XMAS" string:\n`)
console.log(arrayXmas)
console.log(`Values were generated %c${attempts} times until word "XMAS"`, 'color: green');


// 9. Išrikiuokite masyvą priešinga nei abecelės tvarka
arrayXmas.sort().reverse();

console.log("9. Sorted values from (8.) in reverse alphabetical order:");
console.log(arrayXmas)


// 10. Atraskite, kurioje masyvo pozicijoje randasi žodis 'XMAS'
const indexOfXmas = arrayXmas.indexOf('XMAS');

if (indexOfXmas !== -1) {
    console.log(`10. "XMAS" appears in position %c${indexOfXmas}`,'color: green');
} else {
    console.log('10. "XMAS" do not exist in array');
}

