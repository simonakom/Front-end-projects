const btn = document.querySelector(".btn")
const word = document.querySelector(".input-text")
const result = document.querySelector(".result")


btn.addEventListener("click", countVowel)

function countVowel () {
    let vowelCount = 0;
    let wordValue = word.value;

    for (let i = 0; i < wordValue.length; i++) {
        let letter =  wordValue[i];
        console.log(letter)

        if (letter.match(/([a,e,o,u,i])/)) {
            vowelCount++
        }
    }

    result.innerHTML=`${word.value.toUpperCase()} has ${vowelCount} vowels`


    if (word.value === "") {
        result.style.display = 'block';
		result.innerText = `Please enter a word`;
        
        return;
    }

    if (/^\d+$/.test(word.value) || /[^a-zA-Z]/.test(word.value)) {
        result.innerText = `Please enter a valid word \n (only letters are allowed)`;
        return;
    }
}
