
//11 Task

let text = "The planet {{planet}} is the third planet from the {{star}}. {{planet}} is the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, {{planet}} formed over {{age}} ago. {{planet}}'s gravity interacts with other objects in space, especially the {{star}} and the {{satellite}}, {{planet}}'s only natural satellite.";

let earthText = text.replaceAll('{{planet}}', 'Earth');
let sunText = earthText.replaceAll('{{star}}', 'Sun');
let yearsText = sunText.replaceAll('{{age}}', '4.54 billion years');
let finalText = yearsText.replaceAll('{{satellite}}', 'moon');

console.log(finalText);


//12 Task

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


