const billAmount = document.getElementById("bill");
const tipPercentage = document.getElementById("tip");
const selectedTip = document.getElementById("tip").value;
const calculate = document.getElementById("calculate");
const submit = document.querySelector(".submitBtn");
const finalTip = document.getElementById("finalTip");
const total = document.getElementById("total");

const textArea = document.querySelector(".textarea");
const note = document.querySelector(".note");
const result = document.querySelector(".result");

const fallingCoin = document.querySelector("#falling-coin");
const image = document.querySelector(".image-div");
const onTop = document.querySelector("#onTop");
const image2 = document.querySelector(".image-div2");
const image3 = document.querySelector(".image-div3");
const jar = document.getElementById("tipJar");

const tipAmount = 0;
const totalAmount = 0;

calculate.addEventListener("click", () => {
event.preventDefault();
    const bill = +billAmount.value;
    const tip = +tipPercentage.value;
    const tipAmount = (bill * tip) / 100;
    const totalAmount = bill + tipAmount;
    finalTip.innerHTML = (`${tipAmount} $`);
    total.innerHTML = (`${totalAmount} $`);

   // Validation:
    if (isNaN(bill) || !bill || bill <= 0) {
        note.style.display = "block";
        note.innerText = 'Please choose a bill amount!';
        return;
    } else if (!tip) {
        note.style.display = "block";
        note.innerText = 'Please choose a tip!';
        return;
    } else {
        result.style.display = "block";
        note.style.display = "none"; 
    }
    showImage();
});

function ShowTextArea() {
    const selectedTip = tipPercentage.value;
    if (selectedTip === "0") {
        textArea.style.display = "block";
        result.style.display = "none";
        calculate.style.display = 'none';
        submit.style.display = 'block';
        note.style.display = "none";
    } else note.style.display = "none";
}
ShowTextArea();

function refreshPage() {
    location.reload();
    }
    submit.addEventListener('click', refreshPage);

function showImage() {
if (selectedTip !== "") {
        setTimeout(() => {
            image.style.display = "block";
        }, 0);
        setTimeout(() => {
            onTop.style.display = "none";
            image2.style.display = "block";
        }, 500);
        setTimeout(() => {
            image2.style.display = "none";
            image3.style.display = "block";
            jar.style.display = "block";
        }, 1000);
        setTimeout(() => {
            fallingCoin.style.display = "none";
        }, 1200);
    } 
}






