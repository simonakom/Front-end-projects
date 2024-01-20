function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 4 Task
// Sukurkite atsitiktinio stringo iš 15 lotyniškų mažųjų raidžių generavimo algoritmą. Pasinaudokite String.fromCharCode(skaicius) funkcija, kad sugeneruoti atsitiktinę raidę. 

let randomString = '';

for (let i = 0; i < 15; i++) {
    let letters = rand(97,122);
    // Konvertuojama skaičių į raidę:
    randomString += String.fromCharCode(letters);
}

console.log(randomString);
// console.log(String.fromCharCode(randomString)); - nekonvertuota i string 


// 5 Task
// Sukurti masyvą iš 100 atsitiktinių skaičių. Prieš pridėdami elementą prie masyvo patikrinkite  ar skaičius yra nuo 40 iki 60. Jei taip, jo nepridėkite prie masyvo. Galiausiai masyvas turi turėti 100 elementų

let randomArrey = [];
for (let i = 0; i < 100; i++) {
  let randomNumber = rand(1, 100);
  if (randomNumber < 40 || randomNumber > 60) {
    randomArrey.push(randomNumber);
  } 
  else {
    i--;
  }
}
console.log(randomArrey);

// 6 Task
//  Pasinaudojant document.write() funkcija išveskite lyginius 5 uždavinio masyvo skaičius su spalva - žalia, o nelyginius su spalva - raudona;

for (let i = 0; i < randomArrey.length; i++) {
    if (randomArrey[i] % 2 === 0) {
        document.write('<span class="green">' + randomArrey[i] + '</span> ');
    } else {
        document.write('<span class="red">' + randomArrey[i] + '</span> ');
    }
}

// 7 Task
// Sugeneruokite 80 atsitiktinių skaičių nuo 8 iki 32. Apskaičiuokite visų šių skaičių vidurkį.

let numbers = [];
let sum = 0;

for (let i = 0; i < 80; i++) {
    let randomNumber = rand(8, 32);
    numbers.push(randomNumber);
    sum += randomNumber;
}
console.log("Sugeneruoti 80 skaičiai:", numbers);

let average = sum / 80;
console.log("Sugeneruotas skaičių vidurkis:", average);



