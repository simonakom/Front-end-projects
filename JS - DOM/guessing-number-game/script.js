function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let atsitiktinisSkaičius = rand(1, 20),
	spejimuSkaicius = 6;
console.log(atsitiktinisSkaičius);

function guessNumber() {
	let inputElement = document.querySelector("#guess");
	let resultParagraph = document.querySelector("#rez");
	let guessCountElement = document.querySelector("#spejimu-skaicius");

	// if not entered any number
	if (inputElement.value.trim() === "") {
		resultParagraph.innerText = `Please enter a guess 🔮`;
        return;
    }
	// run out of guesses
	if (spejimuSkaicius === 0) {
		resultParagraph.innerText = `The number of guesses has run out, please try again! 😓`;
		// check button disabled and play again appear
        document.getElementById("again").disabled = true;
		document.getElementById("again").style.display = "none";
		document.getElementById("again2").style.display = "block";
		return;
	}
	// comments
	spejimuSkaicius--;
	guessCountElement.innerText = spejimuSkaicius;
	let inputValue = inputElement.value;

	if (inputValue > atsitiktinisSkaičius) {
		resultParagraph.innerText = `Try lower number! 👇`;
	} else if (inputValue < atsitiktinisSkaičius) {
		resultParagraph.innerText = `Try higher number! 👆`;
	} else {
		resultParagraph.innerText = `Congratulations! You guessed the number! 🥳`;
		resultParagraph.innerHTML += `<br><span style="font-size: smaller;"> After ${6 - spejimuSkaicius} attempt(s)</span>`;

	// check button disabled and play again appear
        document.getElementById("again").disabled = true;
		document.getElementById("again").style.display = "none";
		document.getElementById("again2").style.display = "block";
	}
}
function refreshPage() {
    location.reload();
}


