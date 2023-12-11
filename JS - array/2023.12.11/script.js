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

const generateRandomString = (length) => {
    let strLength ="";
    for (let i = 0; i < length; i++){
        strLength+= String.fromCharCode(rand(65, 90));
    } 
    return strLength;
}
console.log(`1. String:\n ${generateRandomString(4)}.`)


const newStringArray = [];
for (let i = 0; i<100; i++){
    newStringArray.push(generateRandomString(4));
}
console.log(`1. Array:\n ${newStringArray}.`)


// 2. Patikrinti, ar String masyve egzistuoja reikšmių, prasidedančių bei užsibaigiančių raide A. Jei taip - pranešti kokia šio elemento pozicija masyve bei  reikšmė;



