// 1. Nupieškite kvadratą iš “*”, kurio kraštines sudaro n=10 “*” simbolių. Pasinaudokite ciklais. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.

//Šis kintamasis nurodo kvadrato kraštinių ilgį ir aukštį.
let n = 10;

document.write (`1. Kvadratas iš “*”, kurio kraštines sudaro n=10 “*” simbolių.<br><br>`)

//pirmo lygio ciklas atsakingas uz tai kad atspausdinti visa kvadrata = suksis 10kartu. 'i' matuoja eilutes skaiciu.
for (let i = 0; i < n; i++) {
	//antro lygio ciklas atsakingas uz tai kad atspausdinti viena eilute = suksis 10kartu ir atspausdins 10 simboliu. 'ii' matuoja kelintas eileje. 
	for (let ii = 0; ii < n; ii++) {
		//atspausdinti zvaigzdute
		document.write (`<span>*</span>`)
	}
	// kad eiluteje butu 10*, reikia padeti br taga po vieno ciklo 
	document.write ('<br>')
} 


//  2.Prieš tai nupieštam kvadratui nupieškite raudonas istrižaines.

document.write (`<br>2. Nupieštam kvadratui nupieškite raudonas istrižaines.<br><br>`)

//pirmo lygio ciklas atsakingas uz tai kad atspausdinti visa kvadrata = suksis 10kartu. 'i' matuoja eilutes skaiciu.
for (let i = 0; i < n; i++) {
		//antro lygio ciklas atsakingas uz tai kad atspausdinti viena eilute = suksis 10kartu ir atspausdins 10 simboliu. 'ii' matuoja kelintas eileje. 
	for (let ii = 0; ii < n; ii++) {
		//istrizaine is kaires ---> i (skaiciuoja eilutes skaicius) turi buti lygus ii(skaicius nurodantis kelintas eileje yra simbolis/zvaigzdute). 
		  //istrizaine is desines --->  eilutes numeri + stulpelio skaiciumi = 10 (+1 nes nes skiciuojam nuo 0)
		if (i === ii || i + ii + 1  === n)
			document.write (`<span style="color: red">*</span>`);//atspausdinti raudonas zvaigzdute
		else document.write (`<span>*</span>`);//atspausdinti juodai likusias zvaigzdute
	}
	// kad eiluteje butu 10*, reikia padeti br taga po vieno ciklo 
	document.write ('<br>')
} 


// 3 Task
// Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
// a.Iškritus herbui;
// b.Tris kartus iškritus herbui;
// c.Tris kartus iš eilės iškritus herbui;

document.write (`<br>3. Monetos metimas`)

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// a. Monetos metimą stabdome tik tada kai iškris herbas;
document.write ("<br>a. Stabdome tik tada kai iškris herbas")

let metimas;
do {
	metimas = rand(0, 1);
    if (metimas === 0) {
        document.write("<br>H<br>");
    } else {
        document.write("<br>S<br>");
    }
} while (metimas !== 0);


// b. Monetos metimą stabdome tris kartus iškritus herbui ;
document.write ("<br>b. Stabdome 3 kartus iškritus herbui")

let threeHerbs= 0;
do {
    metimas = rand(0, 1);
    if (metimas === 0) {
        document.write("<br>H<br>");
		threeHerbs++;
    } else {
        document.write("<br>S<br>");
    }
} while (threeHerbs < 3);


// c. Monetos metimą stabdome tris kartus iškritus herbui (is eiles);
document.write ("<br>c. Stabdome 3 kartus iš eilės iškritus herbui")

let consecutiveHerbs= 0;
do {
    metimas = rand(0, 1);
    if (metimas === 0) {
        document.write("<br>H<br>");
		consecutiveHerbs++;
    } else {
        document.write("<br>S<br>");
        consecutiveHerbs = 0; // Iš naujo skaičiuoti jeigu iškrito skaičius(S)
    }
} while (consecutiveHerbs < 3);