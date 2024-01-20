
//11 Task
// Duotas tekstas, kuriame yra išimti pasikartojantys raktiniai žodžiai ir pakeisti šabloninėmis reikšmėmis. Užduotis: pakeiskite visas šablonines reikšmes pagal pateiktas reikšmes:
// planet – earth
// star – Sun
// age –  4.54 billion years
// satellite –  moon
// "The planet {{planet}} is the third planet from the {{star}}. {{planet}} is the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, {{planet}} formed over {{age}} ago. {{planet}}'s gravity interacts with other objects in space, especially the {{star}} and the {{satellite}}, {{planet}}'s only natural satellite."


let text = "The planet {{planet}} is the third planet from the {{star}}. {{planet}} is the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, {{planet}} formed over {{age}} ago. {{planet}}'s gravity interacts with other objects in space, especially the {{star}} and the {{satellite}}, {{planet}}'s only natural satellite.";

let earthText = text.replaceAll('{{planet}}', 'Earth');
let sunText = earthText.replaceAll('{{star}}', 'Sun');
let yearsText = sunText.replaceAll('{{age}}', '4.54 billion years');
let finalText = yearsText.replaceAll('{{satellite}}', 'moon');

console.log(finalText);


// //12 Task
// Pasinaudodami jau pateikta rand funkcija, sukurkite kitą funkciją, kuri sugeneruoja atsitiktinį skaičių nuo minimalios iki maksimalios reikšmės su dviem skaitmenimis po kablelio.

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newFunction (min, max) {
    let randomFull = rand(min * 100, max * 100) / 100; // Gautas skaičius paverčiamas į skaičių su dviem skaitmenimis po kablelio (Tai daroma panaudojant dalinimą ir pan. matematinius veiksmus). Veliau yra dalinamas iš 100 kad gauti oroginalu skaiciu.
    return randomFull.toFixed(2); //toFixed(2) nustato, jog rezultatas turėtų būti su dviem skaitmenimis po kablelio
}

let example = newFunction (0,4);
    console.log(example);


// //13 Task
// Sukurti du kintamuosius a = 5 bei b = 20; Nepasinaudojant trečiu kintamuoju, apkeisti šių dviejų kintamųjų reikšmes vietomis;

let a = 5, 
    b = 20;
console.log(a,b);

a = a + b;
b = a - b;
a = a - b;

console.log(a,b);


