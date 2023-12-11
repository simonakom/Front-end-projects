function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1 Task
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.


// funkcija grąžina atsitiktinę raidę iš masyvo ['A', 'B', 'C', 'D']. Ji generuoja atsitiktinį indeksą masyvo ilgio intervale ir naudoja šį indeksą raidei išgauti.
function getRandomLetter() {
	const letters = ['A', 'B', 'C', 'D'];
	const randomIndex = Math.floor(Math.random() * letters.length);
	return letters[randomIndex];
	// return letters[Math.floor(Math.random() * letters.length)];
  }
console.log(getRandomLetter());


// Sugeneruoti masyvą su atsitiktinėmis reikšmėmis A, B, C, D - ilgiu 200
function getRandomArray() {
const randomArray = [];
for (let i = 0; i < 10; i++) {
	randomArray.push(getRandomLetter());
  }
  return randomArray;
}
console.log(getRandomArray());


// Suskaičiuoti kiek yra kiekvienos raidės
let letterCounts = [];
let letA = 0;
let letB = 0;
let letC = 0;
let letD = 0;
for (let i = 0; i < 200; i++){
    letterCounts.push( getRandomLetter() );
    if (letterCounts[i] === 'A') letA++;
    else if (letterCounts[i] === 'B') letB++;
    else if (letterCounts[i] === 'C') letC++;
    else  letD++;
}
console.log(letterCounts);

console.log(`A raidžių: ${letA}`);
console.log(`B raidžių: ${letB}`);
console.log(`C raidžių: ${letC}`);
console.log(`D raidžių: ${letD}`);



// 2 Task
// Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.

const sortedArray = getRandomArray().sort();
console.log(sortedArray);


// 3 Task
// Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

// Sugeneruoti 3 masyvai
const array1 = getRandomArray();
const array2 = getRandomArray();
const array3 = getRandomArray();
console.log(`Masyvas 1: ${array1}, Masyvas 2: ${array2}, Masyvas 3: ${array3}`)

// Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus.
const sumArray = array1.map((value, index) => value + array2[index] + array3[index]);
console.log("Sudėtos masyvų reikšmės:", sumArray);

// Unikalių reikšmių 
const uniqueValues = new Set(sumArray);
console.log("Number of unique values:", uniqueValues.size);

let uniqueValue = [];
for (let i = 0; i < sumArray.length; i++) {
  if (!uniqueValue.includes(sumArray[i])) {
    uniqueValue.push(sumArray[i]);
  }
}
const uniqueValuesCount = uniqueValue.length;
console.log(`Unikalių reikšmių: ${uniqueValuesCount} kurios yra: ${uniqueValue} `);


// Unikalių kombinaciju
let uniqueCombinations = [];
for (let i = 0; i < sumArray.length; i++) {
  const combination = `${sumArray[i]}-${i}`;
  if (!uniqueCombinations.includes(combination)) {
    uniqueCombinations.push(combination);
  }
}
const uniqueCombinationsCount = uniqueCombinations.length;

console.log(`Unikalių kombinacijų ${uniqueCombinationsCount} kurios yra:${uniqueCombinations} `);




// 4 Task
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).



// 5 Task
// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.



// 6 Task
// Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.




// 7 Task
// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.
