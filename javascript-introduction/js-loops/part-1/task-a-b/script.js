
// Task: a;b.

// Naršyklėje nupieškite linija iš 400 “*”. 
for (let i = 0; i < 400; i++) {
    let line = "*";
    document.querySelector("#first_line").innerText +=line;
      // document.write (line);
}

// a.Naudodami css stilių “suskaldykite” liniją taip, kad visos žvaigždutės matytųsi ekrane;

for (let i = 0; i < 400; i++) {
    let line = "*";
    document.querySelector("#break_lines").innerText +=line;
    // let breakStars = document.querySelector (`#break_lines`);
    // breakStars.innerText += line 
}


// // b. Programiškai “suskaldykite” žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 50 “*”; 

for(let i = 0; i < 8; i++){
    let max50 = "**************************************************";
    max50 += "\n";
    // document.write(max50)
    document.querySelector("#max_50").innerText += max50;
}

// // second option:
// let i = ""; for(let i = 0; i < 400; i++) {
// maxx50 = "*";
// if ((i + 1) % 50 === 0) 
// maxx50 += '<br>';
// document.write(maxx50);
// }

