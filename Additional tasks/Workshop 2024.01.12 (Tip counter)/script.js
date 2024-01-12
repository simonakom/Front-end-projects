const billAmount = document.getElementById("bill");
const tipPercentage = document.getElementById("tip");
const calculate = document.getElementById("calculate");
const finalTip = document.getElementById("finalTip");
const total = document.getElementById("total");
const textArea = document.getElementById("textarea");
const tipAmount = 0;
const totalAmount = 0;



calculate.addEventListener("click", () => {
  event.preventDefault();
  showImage();
  const bill = +billAmount.value;
  const tip = +tipPercentage.value;
  const tipAmount = (bill * tip) / 100;
  const totalAmount = bill + tipAmount;
  finalTip.innerHTML = tipAmount;
  total.innerHTML = totalAmount;


  if (isNaN(bill) || isNaN(tip) || bill <= 0 || tip < 0) {
        noTipText.innerText = 'Please choose a bill amount!';
        noTipText.style.display = "block";
        return;
}

const selectedTip = document.getElementById("tip").value;
if (selectedTip === "") {
    commentTextArea.style.display = "none";
    noTipText.style.display = "none";
    noTipText.innerText = 'Please choose a tip percentage!';
    noTipText.style.display = "block";
} 

// calculate.innerText = 'Try Again!';

// calculate.onclick = refreshPage;


});

function showImage() {
const fallingCoin = document.querySelector("#falling-coin");
  const image = document.querySelector(".image-div");
  const onTop = document.querySelector("#onTop");
  const image2 = document.querySelector(".image-div2");
  const image3 = document.querySelector(".image-div3");
  const noTipText = document.getElementById("noTipText");
  const selectedTip = document.getElementById("tip").value;


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
        }, 1000);
        setTimeout(() => {
            fallingCoin.style.display = "none";
        }, 1200);
    } else {
        noTipText.innerText = 'Please choose a tip percentage!';
        noTipText.style.display = "block";
    }
}

function ShowTextArea() {
    const selectedTip = document.getElementById("tip").value;
    const commentTextArea = document.getElementById("commentTextArea");
    const noTipText = document.getElementById("noTipText");

    if (selectedTip === "") {
        commentTextArea.style.display = "none";
        noTipText.style.display = "none";
    } 
    else {
    
        noTipText.style.display = "none";
        commentTextArea.style.display = (selectedTip === "0") ? "block" : "none";
        calculate.innerText = (selectedTip === "0") ? 'Submit & Calculate' : 'Calculate';
    }
}
ShowTextArea();



            // function refreshPage() {
            // location.reload();
            // }


