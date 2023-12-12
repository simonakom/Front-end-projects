// 3 Task
// Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
// a.Iškritus herbui;
// b.Tris kartus iškritus herbui;
// c.Tris kartus iš eilės iškritus herbui;



function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let metimuSkaicius = 0;
let metimas = rand(0, 1); //0 - herbas, 1 - skaicius
if (metimas === 0) console.log("H");
else console.log("S");
while (metimas === 1) {
	// metimas = rand(0, 1);
	if (metimas === 0) console.log("H");
	else console.log("S");
}






// 1. Nupieškite kvadratą iš “*”, kurio kraštines sudaro n=10 “*” simbolių. Pasinaudokite ciklais. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.

let n = 10;

for (let i = 0; i < n; i++);{

	for( let ii = 0; ii < n; ii++){
		if(i===ii || i+ii===n) document.write (`<span style=\"color: red">*</span>`);
		else document.wrote ("<span.*</span>")

	}
	document.write ("<br>")
}