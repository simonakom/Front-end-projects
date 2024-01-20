function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 4 Task
// Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.
console.log(`\n 4 Task`);

// //to keep track of the accumulated points:
let petrasSum = 0;
let kazysSum = 0;

//while loop checks if neither player has reached or exceeded 222 points.
while (petrasSum < 222 && kazysSum < 222) {

    //Round Simulation: In each iteration of the loop, random points are generated for Petras and Kazys. 
    let petrasPoints = rand(10, 20);
    let kazysPoints = rand(5, 25);
    console.log(`Kazys: ${kazysPoints} points, Petras: ${petrasPoints } points`);
    //These points are then added to their respective cumulative totals.
    petrasSum += petrasPoints;
    kazysSum += kazysPoints;

    //After each round, the code checks if either player has reached or exceeded 222 points. If so, console indicates the winner
    if (petrasSum >= 222) {
        console.log(`Partiją laimėjo Petras: (Petro taškai: ${petrasSum}, Kazio taškai ${kazysSum}).`);
    } else if (kazysSum >= 222) {
        console.log(`Partiją laimėjo Kazys: (Kazio taškai ${kazysSum}, Petro taškai ${petrasSum}).`);
        break;
    }
}

// 5 Task
/*Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami rand() funkcija. Vinnies ilgis 8.5cm (pilnai sulenda į lentą).   
a. “Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.*/
console.log(`\n 5 Task: a.`);

//1 Vinis
const viniesIlgis = 8.5; // Vinies ilgis cm
const vinisLentoje = 0; // Ilgis, kai vynis pilnai sulenda į lentą.

let smugiuSkaicius = 0; // Smugiu skaicius reikalingas ikalti pilnai vini.
let likusiViniesDalis = viniesIlgis; //likusi vinies dalis ikalimui.

// Loop tęsiasi tol, kol likęs vynies ilgis (likusiViniesDalis) yra didesnis už visiškai įterptą vinies ilgį (vinisLentoje).
while (likusiViniesDalis > vinisLentoje) {
    // Kiekvieno smūgio gylis 1- 10mm. ir dalinama iš 10 kad konvertuoti i cm. arba rand(0.05, 0.2)
    const smugioGylis = (rand(5, 20) / 10).toFixed(2);
    // console.log(`Smugio Gylis (cm): ${smugioGylis}`);

    // po kiekvieno kalimo kad suzinoti kiek liko neikaltos vinies: vinies iglis - smugio gylis  
    likusiViniesDalis -= smugioGylis;
    likusiViniesDalis = likusiViniesDalis.toFixed(2);
    // console.log(`Likusi vinies dalis po smugio: ${likusiViniesDalis}`);

    //kad zinoti kiek jau buvo padaryta smugiu
    smugiuSkaicius++;
}
console.log(`Mazais smugiais reikia ${smugiuSkaicius} smugiu 1 vinies įkalimui.`);


//2 Vinis
const viniesIlgis2 = 8.5; 
const vinisLentoje2 = 0;

let smugiuSkaicius2 = 0; 
let likusiViniesDalis2 = viniesIlgis2; 

while (likusiViniesDalis2 > vinisLentoje2) {
    const smugioGylis2 = (rand(5, 20) / 10).toFixed(2);
    // console.log(`Smugio Gylis (cm): ${smugioGylis2}`);

    likusiViniesDalis2 -= smugioGylis2;
    likusiViniesDalis2 = likusiViniesDalis2.toFixed(2);
    // console.log(`Likusi vinies dalis po smugio: ${likusiViniesDalis2}`);
    smugiuSkaicius2++;
}
console.log(`Mazais smugiais reikia ${smugiuSkaicius2} smugiu 2 vinies įkalimui.`);

//3 Vinis
const viniesIlgis3 = 8.5; 
const vinisLentoje3 = 0;

let smugiuSkaicius3 = 0; 
let likusiViniesDalis3 = viniesIlgis3; 

while (likusiViniesDalis3 > vinisLentoje3) {
    const smugioGylis3 = (rand(5, 20) / 10).toFixed(2);
    // console.log(`Smugio Gylis (cm): ${smugioGylis2}`);

    likusiViniesDalis3 -= smugioGylis3;
    likusiViniesDalis3 = likusiViniesDalis3.toFixed(2);
    // console.log(`Likusi vinies dalis po smugio: ${likusiViniesDalis2}`);
    smugiuSkaicius3++;
}
console.log(`Mazais smugiais reikia ${smugiuSkaicius3} smugiu 3 vinies įkalimui.`);

//4 Vinis
const viniesIlgis4 = 8.5; 
const vinisLentoje4 = 0;

let smugiuSkaicius4 = 0; 
let likusiViniesDalis4 = viniesIlgis3; 

while (likusiViniesDalis4 > vinisLentoje4) {
    const smugioGylis4 = (rand(5, 20) / 10).toFixed(2);
    // console.log(`Smugio Gylis (cm): ${smugioGylis2}`);

    likusiViniesDalis4 -= smugioGylis4;
    likusiViniesDalis4 = likusiViniesDalis4.toFixed(2);
    // console.log(`Likusi vinies dalis po smugio: ${likusiViniesDalis2}`);
    smugiuSkaicius4++;
}
console.log(`Mazais smugiais reikia ${smugiuSkaicius4} smugiu 4 vinies įkalimui.`);

//5 Vinis
const viniesIlgis5 = 8.5; 
const vinisLentoje5 = 0;

let smugiuSkaicius5 = 0; 
let likusiViniesDalis5 = viniesIlgis3; 

while (likusiViniesDalis5 > vinisLentoje5) {
    const smugioGylis5 = (rand(5, 20) / 10).toFixed(2);
    // console.log(`Smugio Gylis (cm): ${smugioGylis2}`);

    likusiViniesDalis5 -= smugioGylis5;
    likusiViniesDalis5 = likusiViniesDalis5.toFixed(2);
    // console.log(`Likusi vinies dalis po smugio: ${likusiViniesDalis2}`);
    smugiuSkaicius5++;
}
console.log(`Mazais smugiais reikia ${smugiuSkaicius5} smugiu 5 vinies įkalimui.`);

//5 Total
const sum = smugiuSkaicius + smugiuSkaicius2 + smugiuSkaicius3 + smugiuSkaicius4 + smugiuSkaicius5;
console.log(`5 vinims įkalti reikėjo: ${sum} mažų smūgių`);


/*b. “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite rand() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.*/

console.log(`\n 5 Task: b.`);
console.log(`\n  1 Vinis`);

const viniesIlgisB = 8.5;
const vinisLentojeB = 0

let smugiuSkaiciusB = 0
let smugiuPataikeSkaiciusB = 0;
let smugiuNepataikeSkaiciusB = 0;
let likusiViniesDalisB = viniesIlgisB; 


while (likusiViniesDalisB > vinisLentojeB) {
    //Generuoja atsitiktinį skaičių nuo 0 iki 1. Ši reikšmė naudojama imituojant tikimybę pataikyti į vinį kiekvieno smūgio metu. Jei skacius daugiau nei 0.5 tada pataikys jei maziau tada ne.
    const smugioPataikymoTikimybeB = Math.random().toFixed(2);;
    // console.log (`Tikimybe kad pataikys: ${smugioPataikymoTikimybeB}`)

    //Hit or miss(jei nepataike console.log rodys undifined): 
    let smugioIlgisB;
    if (smugioPataikymoTikimybeB < 0.5) {
        // 50% tikimybė, kad smūgis nepataiks į vinį
        smugioIlgiB = 0;
        // console.log (`Smūgis nepataikys į vinį :(`)
        smugiuNepataikeSkaiciusB++;
    } else {
        // 50% tikimybė, kad smūgis pataiks į vinį
        smugioIlgisB = rand(20, 30) / 10; //  iš mm į cm
        // console.log (`Smugio Gylis: ${smugioIlgisB} (cm)`)

        likusiViniesDalisB -= smugioIlgisB;
        likusiViniesDalisB = likusiViniesDalisB.toFixed(2);
        // console.log(`Likusi vinies dalis po smugio: ${likusiViniesDalisB}`);

        smugiuSkaiciusB++;
        smugiuPataikeSkaiciusB++;
    }
}

let summ = smugiuPataikeSkaiciusB + smugiuNepataikeSkaiciusB;
console.log(`Iš viso buvo padaryta ${summ} didelių smūgių įkalinti vinį.`);

console.log(`Bendrai pataikyta smūgių: ${smugiuPataikeSkaiciusB}`);
console.log(`Bendrai nepataikyta smūgių: ${smugiuNepataikeSkaiciusB}`);
console.log(`Reikės ${smugiuSkaiciusB} didelių smūgių įkalinti vinį.`);


console.log(`\n 2 Vinis`);

const viniesIlgisB2 = 8.5;
const vinisLentojeB2 = 0

let smugiuSkaiciusB2 = 0
let smugiuPataikeSkaiciusB2 = 0;
let smugiuNepataikeSkaiciusB2 = 0;
let likusiViniesDalisB2 = viniesIlgisB2; 


while (likusiViniesDalisB2 > vinisLentojeB2) {
    const smugioPataikymoTikimybeB2 = Math.random().toFixed(2);;
    // console.log (`Tikimybe kad pataikys: ${smugioPataikymoTikimybeB}`)

    let smugioIlgisB2;
    if (smugioPataikymoTikimybeB2 < 0.5) {
        smugioIlgisB2 = 0;
        // console.log (`Smūgis nepataikys į vinį :(`)
        smugiuNepataikeSkaiciusB2++;
    } else {
        smugioIlgisB2 = rand(20, 30) / 10; //  iš mm į cm
        // console.log (`Smugio Gylis: ${smugioIlgisB} (cm)`)

        likusiViniesDalisB2 -= smugioIlgisB2;
        likusiViniesDalisB2 = likusiViniesDalisB2.toFixed(2);
        // console.log(`Likusi vinies dalis po smugio: ${likusiViniesDalisB}`);

        smugiuSkaiciusB2++;
        smugiuPataikeSkaiciusB2++;
    }
}

let summ2 = smugiuPataikeSkaiciusB2 + smugiuNepataikeSkaiciusB2;
console.log(`Iš viso buvo padaryta ${summ2} didelių smūgių įkalinti vinį.`);

console.log(`Bendrai pataikyta smūgių: ${smugiuPataikeSkaiciusB2}`);
console.log(`Bendrai nepataikyta smūgių: ${smugiuNepataikeSkaiciusB2}`);
console.log(`Reikės ${smugiuSkaiciusB2} didelių smūgių įkalinti vinį.`);


console.log(`\n 3 Vinis`);

const viniesIlgisB3 = 8.5;
const vinisLentojeB3 = 0

let smugiuSkaiciusB3 = 0
let smugiuPataikeSkaiciusB3 = 0;
let smugiuNepataikeSkaiciusB3 = 0;
let likusiViniesDalisB3 = viniesIlgisB3; 

while (likusiViniesDalisB3 > vinisLentojeB3) {
    const smugioPataikymoTikimybeB3 = Math.random().toFixed(2);;
    // console.log (`Tikimybe kad pataikys: ${smugioPataikymoTikimybeB}`)

    let smugioIlgisB3;
    if (smugioPataikymoTikimybeB3 < 0.5) {
        smugioIlgisB3 = 0;
        // console.log (`Smūgis nepataikys į vinį :(`)
        smugiuNepataikeSkaiciusB3++;
    } else {
        smugioIlgisB3 = rand(20, 30) / 10; //  iš mm į cm
        // console.log (`Smugio Gylis: ${smugioIlgisB} (cm)`)

        likusiViniesDalisB3 -= smugioIlgisB3;
        likusiViniesDalisB3 = likusiViniesDalisB3.toFixed(2);
        // console.log(`Likusi vinies dalis po smugio: ${likusiViniesDalisB}`);

        smugiuSkaiciusB3++;
        smugiuPataikeSkaiciusB3++;
    }
}

let summ3 = smugiuPataikeSkaiciusB3 + smugiuNepataikeSkaiciusB3;
console.log(`Iš viso buvo padaryta ${summ3} didelių smūgių įkalinti vinį.`);

console.log(`Bendrai pataikyta smūgių: ${smugiuPataikeSkaiciusB3}`);
console.log(`Bendrai nepataikyta smūgių: ${smugiuNepataikeSkaiciusB3}`);
console.log(`Reikės ${smugiuSkaiciusB3} didelių smūgių įkalinti vinį.`);

console.log(`\n 4 Vinis`);

const viniesIlgisB4 = 8.5;
const vinisLentojeB4 = 0

let smugiuSkaiciusB4 = 0
let smugiuPataikeSkaiciusB4 = 0;
let smugiuNepataikeSkaiciusB4 = 0;
let likusiViniesDalisB4 = viniesIlgisB4; 

while (likusiViniesDalisB4 > vinisLentojeB4) {
    const smugioPataikymoTikimybeB4 = Math.random().toFixed(2);;
    // console.log (`Tikimybe kad pataikys: ${smugioPataikymoTikimybeB}`)

    let smugioIlgisB4;
    if (smugioPataikymoTikimybeB4 < 0.5) {
        smugioIlgisB4 = 0;
        // console.log (`Smūgis nepataikys į vinį :(`)
        smugiuNepataikeSkaiciusB4++;
    } else {
        smugioIlgisB4 = rand(20, 30) / 10; //  iš mm į cm
        // console.log (`Smugio Gylis: ${smugioIlgisB} (cm)`)

        likusiViniesDalisB4 -= smugioIlgisB4;
        likusiViniesDalisB4 = likusiViniesDalisB4.toFixed(2);
        // console.log(`Likusi vinies dalis po smugio: ${likusiViniesDalisB}`);

        smugiuSkaiciusB4++;
        smugiuPataikeSkaiciusB4++;
    }
}

let summ4 = smugiuPataikeSkaiciusB4 + smugiuNepataikeSkaiciusB4;
console.log(`Iš viso buvo padaryta ${summ4} didelių smūgių įkalinti vinį.`);

console.log(`Bendrai pataikyta smūgių: ${smugiuPataikeSkaiciusB4}`);
console.log(`Bendrai nepataikyta smūgių: ${smugiuNepataikeSkaiciusB4}`);
console.log(`Reikės ${smugiuSkaiciusB4} didelių smūgių įkalinti vinį.`);

console.log(`\n 5 Vinis`);

const viniesIlgisB5 = 8.5;
const vinisLentojeB5 = 0

let smugiuSkaiciusB5 = 0
let smugiuPataikeSkaiciusB5 = 0;
let smugiuNepataikeSkaiciusB5 = 0;
let likusiViniesDalisB5 = viniesIlgisB5; 

while (likusiViniesDalisB5 > vinisLentojeB5) {
    const smugioPataikymoTikimybeB5 = Math.random().toFixed(2);;
    // console.log (`Tikimybe kad pataikys: ${smugioPataikymoTikimybeB}`)

    let smugioIlgisB5;
    if (smugioPataikymoTikimybeB5 < 0.5) {
        smugioIlgisB5 = 0;
        // console.log (`Smūgis nepataikys į vinį :(`)
        smugiuNepataikeSkaiciusB5++;
    } else {
        smugioIlgisB5 = rand(20, 30) / 10; //  iš mm į cm
        // console.log (`Smugio Gylis: ${smugioIlgisB} (cm)`)

        likusiViniesDalisB5 -= smugioIlgisB5;
        likusiViniesDalisB5 = likusiViniesDalisB5.toFixed(2);
        // console.log(`Likusi vinies dalis po smugio: ${likusiViniesDalisB}`);

        smugiuSkaiciusB5++;
        smugiuPataikeSkaiciusB5++;
    }
}

let summ5 = smugiuPataikeSkaiciusB5 + smugiuNepataikeSkaiciusB5;
console.log(`Iš viso buvo padaryta ${summ5} didelių smūgių įkalinti vinį.`);

console.log(`Bendrai pataikyta smūgių: ${smugiuPataikeSkaiciusB5}`);
console.log(`Bendrai nepataikyta smūgių: ${smugiuNepataikeSkaiciusB5}`);
console.log(`Reikės ${smugiuSkaiciusB5} didelių smūgių įkalinti vinį.`);

//5 Total
const sssum = smugiuSkaiciusB + smugiuSkaiciusB2 + smugiuSkaiciusB3 + smugiuSkaiciusB4 + smugiuSkaiciusB5;
console.log(`\n 5 vinims įkalti reikėjo: ${sssum} didelių smūgių`);