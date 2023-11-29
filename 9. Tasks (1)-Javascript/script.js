//1 Task
let vardas = 'Tom'; 
let pavarde = 'Hanks';
// console.log(vardas, pavarde);
// console.log(typeof vardas, typeof pavarde);

if(vardas.length > pavarde.length){
    console.log(pavarde);
} 
else{
    console.log(vardas);
}


// 2 Task
let manoVardas = 'Simona', manoPavarde = 'Komarovska', gimimoMetai = '1997', sieMetai = '2023';
let amzius = sieMetai - gimimoMetai

console.log('Aš esu ' + manoVardas + ' ' + manoPavarde + '. Man yra ' + amzius + ' metai.')


// //3 Task
let vartotojoVardas = 'Vardas'; 
let vartotojoPavarde = 'Pavarde';
let inicialai = vartotojoVardas [0] + vartotojoPavarde [0];

console.log (inicialai);


// //4 Task
let aktoriausVardas = 'Johnny'; 
let aktoriausPavarde = 'Depp';
// console.log(aktoriausVardas, aktoriausPavarde);
// console.log(typeof aktoriausVardas, typeof aktoriausPavarde);

let inicialaiTrys = 
aktoriausVardas [3] + 
aktoriausVardas [4] + 
aktoriausVardas [5] +
aktoriausPavarde [1] +
aktoriausPavarde [2] +
aktoriausPavarde [3];

console.log(inicialaiTrys);
// console.log(typeof inicialaiTrys);


// //5 Task
let data = '2023-11-28'; 

let menesis = data[5]+data[6];
if (menesis === '01') console.log ('Sausis')
else if (menesis === '02') console.log ('Vasaris')
else if (menesis === '03') console.log ('Kovas')
else if (menesis === '04') console.log ('Balandis')
else if (menesis === '05') console.log ('Gegužė')
else if (menesis === '06') console.log ('Birželis')
else if (menesis === '07') console.log ('Liepa')
else if (menesis === '08') console.log ('Rugpjūtis')
else if (menesis === '09') console.log ('Rugsėjis')
else if (menesis === '10') console.log ('Spalis')
else if (menesis === '11') console.log ('Lapkritis')
else if (menesis === '12') console.log ('Gruodis')
else console.log ('error');
