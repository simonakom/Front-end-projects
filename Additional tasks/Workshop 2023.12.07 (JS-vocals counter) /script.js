const btn = document.querySelector(".btn")
const word = document.querySelector(".input-text")
const result = document.querySelector(".result")

btn.addEventListener("click", countVowel)

function countVowel() {
    let vowelCount = 0;
    let wordValue = word.value.toUpperCase();

    for (let i = 0; i < wordValue.length; i++) {
        let letter = wordValue[i];

        if (letter.match(/[aeiou]/i)) {
            vowelCount++
        }
    }

    if (word.value === "") {
        result.style.display = 'block';
        result.innerText = `Please enter a word`;
        return;
    }
    if (/^\d+$/.test(word.value) || /[^a-zA-Z]/.test(word.value)) {
        result.innerText = `Please enter a valid word \n (only letters are allowed)`;
        return;
    }

    result.innerHTML = `${wordValue} has ${vowelCount} vowels`;
}
