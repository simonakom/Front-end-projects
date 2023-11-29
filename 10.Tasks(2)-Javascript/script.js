
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//6 Task
let title = 'Once upon a time in hollywood';
let smallTitle = title.toLowerCase();

// let star = '*';
// let starTitle = smallTitle.replaceAll('o', star);
let starTitle = smallTitle.replaceAll('o', '*');

console.log(starTitle);
// console.log(typeof title, typeof smallTitle, typeof starTitle);


//7 Task
let numberOne = rand (0,2),
    numberTwo = rand (0,2),
    numberThree = rand (0,2),
    numberFour = rand (0,2);

console.log (numberOne);
console.log (numberTwo);
console.log (numberThree);
console.log (numberFour);
// console.log(numberOne, numberTwo, numberThree, numberFour);

let countZero = 0,
    countOne = 0,
    countTwo = 0;

    if (numberOne === 0) {countZero++;} 
    else if (numberOne === 1) {countOne++;}
    else if (numberOne === 2) { countTwo++;}
    
    if (numberTwo === 0) {countZero++;} 
    else if (numberTwo === 1) {countOne++;}
    else if (numberTwo === 2) { countTwo++;}

    if (numberThree === 0) {countZero++;} 
    else if (numberThree === 1) {countOne++;}
    else if (numberThree === 2) { countTwo++;}

    if (numberFour === 0) {countZero++;} 
    else if (numberFour === 1) {countOne++;}
    else if (numberFour === 2) { countTwo++;}

    console.log("Zero's -", countZero);
    console.log("One's - ", countOne);
    console.log("Two's - ", countTwo);


//8 Task
let one = rand (0,4),
    two = rand (0,4);
 
    // console.log(one);
    // console.log(two);
    console.log(one, two);

if (one==0) {result=0;} 
else if (two==0) {result=0;} 
else if (one>=two) {result = one / two;} 
else if (one<= two) {result = two / one;} 

console.log(result);
console.log(result.toFixed(2));


//9 Task

let a = rand(0, 25),
    b = rand(0, 25),
    c = rand(0, 25);

console.log(a, b, c);

if (c<a && c>b) {console.log(c)}
else if (c>a && c<b) {console.log(c)}
else if (a<b && a>c) {console.log(a)}
else if (a>b && a<c) {console.log(a)}
else if (b<a && b>c) {console.log(b)}
else if (b>a && b<c) {console.log(b)}
else if (b==c, a==b, a==c)  {console.log('no middle value')}


 //10 Task
let actorName = 'Johnny'; 
let actorSurname = 'Depp';
let initials = actorName[0] + actorSurname[0]; 

console.log(initials);
// console.log(typeof actorName,typeof actorSurname,typeof initials);

  
 //11 Task 
let letter1 = rand(97, 122);
let letter2 = rand(97, 122);
let letter3 = rand(97, 122);
console.log(String.fromCharCode(letter1), String.fromCharCode(letter2), String.fromCharCode(letter3));
console.log(typeof letter1, typeof letter2, typeof letter3);

// changed value from number to string:
let string1 = '' + letter1;
let string2 = '' + letter2;
let string3 = '' + letter3;
console.log(typeof string1, typeof string2, typeof string3);



