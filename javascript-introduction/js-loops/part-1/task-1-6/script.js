function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1 task
//Naudokite funkcija rand(). Sugeneruokite atsitiktinį skaičių nuo 1 iki 6 ir jį atspausdinkite atitinkame h tage. Pvz skaičius 3- rezultatas: <h3>3</h3>

let numb = rand(1,6);
console.log (numb)
document.querySelector("#result").innerText = `Rezultatas: ${numb}`;

// 2 task
//Naudokite funkcija rand(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti žali, 0 - raudonas, didesni už 0 mėlyni.

for (let i = 0; i < 3; i++) {
    let randomNumber = rand(-10, 10);
    console.log (randomNumber)

    let color = '';
    if (randomNumber < 0) {
        color = 'green';
    } else if (randomNumber === 0) {
        color = 'red';
    } else {
        color= 'blue';
    }

    document.write(`<b class= "${color}">  ${randomNumber} </b><br>`);
    // document.write('<p class="'+ color+'">'   + randomNumber + '</p>' );
    document.write('<br>')
}

// 3 task
//Sukurkite kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.

 let text = ["An American in Paris",
                    "Breakfast at Tiffany's",
                    "2001: A Space Odyssey",
                    "It's a Wonderful Life"];

    for(let i = 0; i < text.length; i++) {
        let result = text[i].replace(/[aeiou]/gi, '');
        document.write(result+ "</br>"+"</br>");
    }
    document.write('<br>')


// 4 task
//Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos.

     let x = 0;
     let xnumber = 0;
     
     for (let i = 0; i < 300; i++) {
        xnumber = rand(0, 300);
         if (xnumber > 150) {
             x++
         }
        //  document.write(xnumber + '');

        if (xnumber > 275) {
         color = "red";
        } else {
         color = "black";
        }
        document.write(`<span style="color: ${color};">${xnumber} </span>`);
     }

     document.write("<br>"+ "Skaičių didesnių už 150 yra:"+ "\n" + x)
     document.write('<br>')
     document.write('<br>')


// with arrey
    //  let numbers = [];
    //  let biggerThan150 = 0;
    //  for (let i = 0; i < 300; i++) {
    //      let randomNumber = rand(0, 300);
    //      if (randomNumber > 150) biggerThan150++;
     
    //      if (randomNumber > 275) {
    //          //raudonas skaicius
    //          document.write(`<span style="color: red">${randomNumber}</span> `);
    //      } else {
    //          //paprastas skaicius
    //          // document.write("<black>" + randomNumber + "</black> ");
    //          document.write(`<span style="color: black">${randomNumber}</span> `);
    //      }
    //  }
    //  console.log(`Didesnių skaičių nei 150 masyve yra: ${biggerThan150}`);

// 5 task
//Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, kad visi rezultatai matytųsi ekrane.

let sk = [];

for (var i = 1; i <= 3000; i++) {
    if (i % 77 === 0) {
        sk.push(i);
    }
}

document.write(sk.join(', '));
document.write('<br>')
document.write('<br>')


// // Su kableliu po paskutinio skaiciaus
// let sk = "";

// for (var i = 1; i <= 3000; i++) {
//     if (i % 77 === 0) {
//         sk += i;

//         if (i < 3000) {
//              sk += ', ';
//         }
//     }
// }
// document.write("<br>"+sk+"<br>"+"<br>");


// 6 task
//Duotas vardų masyvas, kuriame visi vardai prasideda mažąja raide. Reikia sukurti algoritmą, kuris visus vardus konvertuoja į iš didžiosios raidės prasidedančius vardus:

    let namesArray = [
        'alice', 'bob', 'charlie', 'david', 'emily',
        'frank', 'grace', 'harry', 'isabella', 'jack',
        'kate', 'liam', 'molly', 'nathan', 'olivia',
        'peter', 'quinn', 'rachel', 'steve', 'tina'
    ];

    for (let i = 0; i < namesArray.length; i++) {
        let caps = namesArray[i].charAt(0).toUpperCase() + namesArray[i].slice(1);

         document.write(caps + ", ");
    }

    