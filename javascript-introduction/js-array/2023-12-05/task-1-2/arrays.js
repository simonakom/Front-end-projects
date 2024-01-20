function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1Task: Sukurkite masyvą iš 20 elementų:

// a. Kurių reikšmės: 0, 1, 2 …, 18 ,19;
let a = [];
for (let i = 0; i < 20; i++) {
    a.push(i);
}
console.log(a);

// b. Kurių reikšmės: 1,2 3, … ,19, 20
let b = [];
for (let i = 1; i < 21; i++) {
    b.push(i);
}
console.log(b);

// c. Kurių reikšmės: 19, 18 … 2, 1, 0
let c = [];
for (let i = 0; i < 20; i++) {
    c.push(i);
}
console.log(c.reverse());

// d. Kurių reikšmės: 20, 21, 22…. 38, 39..
let d = [];
for (let i = 20; i < 40; i++) {
    d.push(i);
}
console.log(d);

// e. Kurių reikšmės: 49, 48, 47…. 31, 30
let e = [];
for (let i = 30; i < 50; i++) {
    e.push(i);
}
console.log(e.reverse());

// f. Su atsitiktinėmis reikšmėmis nuo 0 iki 10
let f = [];
for(let i = 0; i < 20; i++) {
    f.push(rand(0, 10));
}
console.log(f);


// 2Task: Pasinaudokite join funkcija ir atspausdinkite vieno iš ankščiau sukurtų masyvų reikšmes tokia tvarka (pvz masyvas a) 0 -> 1 -> 2…. -> 18 -> 19;

let sequence = [];
for (let i = 0; i < 20; i++) {
    sequence.push(i);
}
console.log(sequence.join(" -> "));


