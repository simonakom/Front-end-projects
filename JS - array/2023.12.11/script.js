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
console.log(`2. String:\n ${generateString(4)}`)

const stringArray = [];
for (let i = 0; i<100; i++){
    stringArray.push(generateString(4));
}
console.log(`2. Array:\n ${stringArray}`)
 
// 3. Išrūšiuoti String'ų masyvą didėjančia tvarka;

stringArray.sort()
console.log(`3.\n ${stringArray}`)

// 4. Išrūšiuoti tą patį masyvą mažėjančia tvarka;

stringArray.sort().reverse();
console.log(`4.\n ${stringArray}`)  

// 5. Sukurti masyvą iš 100 elementų, sudarytą iš skaičių nuo -100 iki 200;
 
const numbersArray = generateRandomNumbersArray(100, -100, 200);
console.log(`5.\n ${numbersArray}`)  

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
console.log(`7.\n ${numbersArray}`);

// 8. Išrūšiuoti masyvą mažėjančia tvarka;
// numbersArray.reverse();
numbersArray.sort((num1, num2)=>{
    return num2-num1;
});
console.log(`8.\n ${numbersArray}`);

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