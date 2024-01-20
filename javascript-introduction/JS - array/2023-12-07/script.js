function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1 Task
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

  // funkcija grąžina random masyva ilgiu 200 (length) su reiksmem A, B, C, D
  const generateArrayOfStrings = (Length) => {
    const arr = [];
    for (let i=0; i<Length; i++) { 
    let randomNumber = String.fromCharCode(rand(65,68));
    arr.push(randomNumber);
  }
    return arr;  
  }
  const randomArray = generateArrayOfStrings(200);
  console.log (`1 Task: ${randomArray}`);

  // Suskaičiuokite kiek yra kiekvienos raidės.
  let countA = 0;
  let countB = 0;
  let countC = 0;
  let countD = 0;

  for (let i = 0; i < randomArray.length; i++) {
    const currentLetter = randomArray[i];
    // const currentLetter: During each iteration of the loop, currentLetter holds the value of the letter(element) at the current position(index) in the array.
    // randomArray[i]: retrieves the element at the current index i in the array. The index i represents the current iteration of the loop.
    if (currentLetter === 'A') {
      countA++;
  } else if (currentLetter === 'B') {
      countB++;
  } else if (currentLetter === 'C') {
      countC++;
  } else if (currentLetter === 'D') {
      countD++;
  }
  }
  console.log(`Total of A: ${countA}, Total of B: ${countB}, Total of C: ${countC}, Total of D: ${countD}`);


// 2 Task
// Išrūšiuokite 1 uždavinio masyvą pagal abecėlę.
const sortedArray = randomArray.sort();
console.log(`2 Task: ${sortedArray}`);


// 3 Task
// Sugeneruokite 3 masyvus pagal 1 uždavinio sąlygą. Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

// Sugeneruoti 3 masyvai pagal 1 uždavinio sąlygą. 
      const arr1 = generateArrayOfStrings(200), 
            arr2 = generateArrayOfStrings(200), 
            arr3 = generateArrayOfStrings(200);
        console.log(`3 Task:\n Arrey 1: ${arr1},\n Arrey 2: ${arr2}, \n Arrey 3: ${arr3}`)


// Sudėkite masyvų reikšmes, sudėdami reikšmes pagal atitinkamus indeksus.
sumArray = [];
for(let index in arr1){
  sumArray[index] = arr1[index] + arr2[index] + arr3[index];
  // sumArray[index] = arr1[index].concat (arr2[index], arr3[index]);
}
console.log(`Sum of Arreys: ${sumArray}`);

//Unikalių reikšmių: 
let uniqueValue = [];
for (const value of sumArray){
// ! padaro salyga priesinga ne tai kuria nurodem
  if (!uniqueValue.includes(value)){
    uniqueValue.push(value);
  }
}
console.log(`Unique values: ${uniqueValue}`);

//Unikalių kombinaciju (po vieną, nesikartojančių reiksmiu):
let superUniqueValues = [];
let superUniqueCombinations = 0;
  
// ciklas sukamas per sumArrey masyva (visas 3 raidziu kombinacijas). 
// Per pirma apsisukima, value yra pirma sumArray reiksme "ADA" (value=sumArrey[0])
for (let value of sumArray){
        // sksaicius kiek yra tu paciu kombinaciju
      let countOfThisCombination = 0; 

      // Antro ciklo metu, pirmoji reiskme (value2) = pirma sumArray reiksme "ADA"
      for(let value2 of sumArray)
      {
        if(value === value2){
          countOfThisCombination++;
        }
      }
      if (countOfThisCombination ===1) {
      superUniqueCombinations++;
      superUniqueValues.push(value)
      }
}
console.log(` Unique combinations: ${superUniqueCombinations}.\n Non-repeating value :${superUniqueValues}.\n Total unique values:${superUniqueValues.length}.`);


// 4 Task
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

function generateUniqueArrey (length, min, max){
  const arr = [];
  while (arr.length < length){
    let randomNumber = rand(min,max);
    if(!arr.includes(randomNumber))
    {
      arr.push(randomNumber)
    }
  }
  return arr;
}

const array1 =  generateUniqueArrey (100, 100, 999),
      array2 =  generateUniqueArrey (100, 100, 999);

      console.log (`4 Task:\n Arrey 1: ${array1}\n Arrey2: ${array2} `)


// 5 Task
// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 3 uždavinio masyve, bet nėra antrame 3 uždavinio masyve.

const fifthArrey = [];

for (let index in arr1){
  // tikrinam ar antrame masyve yra pirmojo masyvo einamoji reiksme
  if (arr1[index] !== arr2[index]){
    fifthArrey.push(arr1[index])
  }
}
console.log(`5 Task: ${fifthArrey}`)


// 6 Task
// Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 4 uždavinio masyvuose.
const newArrey = [];

for(let value of array1){
  if(array2.includes(value)){
    newArrey.push(value); 
  }
}
console.log(`6 Task: ${newArrey}`)

// const matchingNumbers = array1.filter((value) => array2.includes(value));
// console.log(`6 Task: ${matchingNumbers}`)


// 7 Task
// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 4 uždavinio masyvo reikšmės, o jo reikšmės būtų iš antrojo masyvo.

const newArray2 = [];
let i = 0;
// eina per visas pirmojo masyvo reiksmes. Reiksmes pavirsta indexais
for (let index of array1) {
	newArray2[index] = array2[i];
	i++;
}
console.log("7 Task");
console.log(newArray2);


