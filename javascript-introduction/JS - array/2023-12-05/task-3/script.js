function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 3Task: iš f masyvo ištrinkite elementus kurie:

//----------------------------------with-functions--------------------------------
function generateArrayOfRandomNumbers(min,max, countOfElements) {
	let array = [];
	for (let i = 0; i < countOfElements  ; i++) {
		array.push(rand(min, max));
	}
	return array;
}

function getNextElement (array, index ){
  if (array.length - 1 === index)
    return array[0];
    return array[index+1];
}

// function getNextElement (array, index ){
//   let nextElement;
//   if (array.length - 1 === index){
//     nextElement = array[0]
//   }
// else { 
//   nextElement = array[index+1]
// }
// return nextElement;
// }

// a. Yra lyginiai;
let third = generateArrayOfRandomNumbers(0,10,20);
console.log(third);
// console.log(generateArrayOfRandomNumbers(0,10,20));

for (let i = 0; i < third.length; i++) {
  if (third[i] % 2 === 0) {
    third.splice(i, 1);
    i--;
  }
}
console.log(third);


// b. Nelyginiai;
third = generateArrayOfRandomNumbers(0,10,20);
console.log(third);

for (let i = 0; i < third.length; i++) {
  if (third[i] % 2 !== 0) {
    third.splice(i, 1);
    i--;
  }
}
console.log(third);

// c. Dalinasi iš 3;
third = generateArrayOfRandomNumbers(0,10,20);
console.log(third);

for (let i = 0; i < third.length; i++) {
  if (third[i] % 3 === 0) {
    third.splice(i, 1);
    i--;
  }
}
console.log(third);

// d. Yra lygūs savo indeksui;
third = generateArrayOfRandomNumbers(0,10,20);
console.log(third);

for (let i = 0; i < third.length; i++) {
  if (i === third[i] ) {
    third.splice(i, 1);
    i--;
  }
}
console.log(third);

// e. Yra mažesni nei 5 arba didesni nei 8;
third = generateArrayOfRandomNumbers(0,10,20);
console.log(third);

for (let i = 0; i < third.length; i++) {
  if (third[i] < 5 || third[i] > 8 ) {
    third.splice(i, 1);
    i--;
  }
}
console.log(third);

// f. Yra  nuo 2 iki 5;
third = generateArrayOfRandomNumbers(0,10,20);
console.log(third);

for (let i = 0; i < third.length; i++) {
  if (third[i] >= 2 && third[i] <= 5 ) {
    third.splice(i, 1);
    i--;
  }
}
console.log(third);

// g. kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)
third = generateArrayOfRandomNumbers(0,10,20);
console.log(third);

for (let i = 0; i < third.length; i++) {

  let nextElement= getNextElement (third, i )

  if (third[i] + nextElement >= 10 ) {
    third.splice(i, 1);
    i--;
  }
}
console.log(third);

// h. kurių suma su sekančiu elementu masyve yra lyginė
third = generateArrayOfRandomNumbers(0,10,20);
console.log(third);

for (let i = 0; i < third.length; i++) {

  let nextElement= getNextElement (third, i )

  if ((third[i] + nextElement) % 2 === 0 ) {
    third.splice(i, 1);
    i--;
  }
}
console.log(third);


//----------------------------------without-functions--------------------------------

//3Task: iš f masyvo ištrinkite elementus kurie:

// let third = [];
// for(let i = 0; i < 20; i++) {
//     third.push(rand(0, 10));
// }
// console.log(third);

// // a. Yra lyginiai;

// for (let i = 0; i < third.length; i++) {
//   if (third[i] % 2 === 0) {
//     third.splice(i, 1);
//     i--;
//   }
// }
// console.log(third);

// // b. Nelyginiai;

// third = [];
// for(let i = 0; i < 20; i++) {
//     third.push(rand(0, 10));
// }
// console.log(third);

// for (let i = 0; i < third.length; i++) {
//   if (third[i] % 2 !== 0) {
//     third.splice(i, 1);
//     i--;
//   }
// }
// console.log(third);

// // c. Dalinasi iš 3;

// third = [];
// for(let i = 0; i < 20; i++) {
//     third.push(rand(0, 10));
// }
// console.log(third);

// for (let i = 0; i < third.length; i++) {
//   if (third[i] % 3 === 0) {
//     third.splice(i, 1);
//     i--;
//   }
// }
// console.log(third);

// // d. Yra lygūs savo indeksui;

// third = [];
// for(let i = 0; i < 20; i++) {
//     third.push(rand(0, 10));
// }
// console.log(third);

// for (let i = 0; i < third.length; i++) {
//   if (i === third[i] ) {
//     third.splice(i, 1);
//     i--;
//   }
// }
// console.log(third);

// // e. Yra mažesni nei 5 arba didesni nei 8;

// third = [];
// for(let i = 0; i < 20; i++) {
//     third.push(rand(0, 10));
// }
// console.log(third);

// for (let i = 0; i < third.length; i++) {
//   if (third[i] < 5 || third[i] > 8 ) {
//     third.splice(i, 1);
//     i--;
//   }
// }
// console.log(third);

// // f. Yra  nuo 2 iki 5;

// third = [];
// for(let i = 0; i < 20; i++) {
//     third.push(rand(0, 10));
// }
// console.log(third);

// for (let i = 0; i < third.length; i++) {
//   if (third[i] >= 2 && third[i] <= 5 ) {
//     third.splice(i, 1);
//     i--;
//   }
// }
// console.log(third);

// // g. kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)

// third = [];
// for(let i = 0; i < 20; i++) {
//     third.push(rand(0, 10));
// }
// console.log(third);

// for (let i = 0; i < third.length; i++) {
   
//   let nextElement;
//   if (third.length - 1 === i){
//     nextElement = third[0]
//   }
// else {
//   nextElement = third [i+1]
// }

//   if (third[i] + nextElement >= 10 ) {
//     third.splice(i, 1);
//     i--;
//   }
// }
// console.log(third);

// // h. kurių suma su sekančiu elementu masyve yra lyginė

// third = [];
// for(let i = 0; i < 20; i++) {
//     third.push(rand(0, 10));
// }
// console.log(third);

// for (let i = 0; i < third.length; i++) {
   
//   let nextElement;
//   if (third.length - 1 === i){
//     nextElement = third[0]
//   }
// else {
//   nextElement = third [i+1]
// }

//   if ((third[i] + nextElement) % 2 === 0 ) {
//     third.splice(i, 1);
//     i--;
//   }
// }
// console.log(third);





