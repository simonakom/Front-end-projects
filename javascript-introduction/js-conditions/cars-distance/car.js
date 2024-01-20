// 2 Task

// Atstumas tarp automobilių lygus s0 km. Jie vienu metu pradeda važiuoti. Antrasis automobilis vejasi pirmąjį. Automobilių greičiai  v1 ir v2 km/h - sveikieji skaičiai. Parašykite programą, kuri apskaičiuotų atstumą s tarp automobilių po t valandų ir apibūdintų situaciją (niekada nepavys, aplenkė, pavys, pasivijo).

// Pvz.: s0 = 200, v1 = 80, v2 = 50, t = 2, s = 260 km. Niekada nepavys;
// s0 = 20, v1 = 70, v2 = 80, t = 3, s = 10 km. Aplenkė.


let s0 = 200; // Pradinis atstumas km
let v1 = 80; // Greitis pirmojo automobilio km/h
let v2 = 50; // Greitis antrojo automobilio km/h
let t = 2;  // Laikas 

let s = (v1 - v2) * t;
document.write(`Atstumas tarp automobilių po ${t} valandų yra: ${s} km.<br>`);

if (s === 0) {
    document.write("Automobiliai yra vienas šalia kito");
} else if (0 < s) {
    document.write("Antrasis automobilis niekada nepavys pirmojo");
} else {
    document.write("Antrasis automobilis aplenks pirmąjį");
}
