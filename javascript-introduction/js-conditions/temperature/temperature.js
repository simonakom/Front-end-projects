// 3 Task

// Skaičiai t1, t2, t3 reiškia vidutinę trijų iš eilės einančių dienų temperatūrą. Kelias dienas temperatūra buvo neigiama, o kelias - teigiama? Rezultatą išspausdinkite žodžiais. Šiuo atveju 0 skaitome, kaip teigiamą temperatūrą.
// Pvz.: t1 = 2, t2 = -5, t3 = 8, Rezultatas: Dvi dienas teigiama, vieną - neigiama.

let t1 = 2,
    t2 = -5,
    t3 = 8;

let negative = 0;
let positive = 0;

if (t1 < 0) {
    negative++;
} else {
    positive++;
}

if (t2 < 0) {
    negative++;
} else {
    positive++;
}

if (t3 < 0) {
    negative++;
} else {
    positive++;
}

document.write (`Neigiama temperatura buvo <b style="color:red">  ${negative}</b> diena(-ų).<br>`);
document.write (`Teigiama temperatura buvo <b style="color:blue">  ${positive}</b> diena(-ų).`);