const   height= document.querySelector(".height"), 
        weight = document.querySelector(".weight"),
        calculate = document.querySelector (".calc"),
        result = document.querySelector (".result"),
        reset = document.querySelector (".reset");

// attach an event listener to a click event on an HTML element. The event listener is set to execute a function named calBMI when the click event occurs.
calculate. addEventListener("click", calBMI);
reset.addEventListener("click", resetForm);

// This declares a function named calBMI that takes an event object (e) as its parameter.Event objects are automatically passed to event handler functions and contain information about the event, such as its type, target element, and any additional data related to the event.
function calBMI (e) {
    e.preventDefault()

    let heightValue = height.value
    let weightValue = weight.value
    
    if (heightValue === "" && weightValue === "") {
        result.innerText = (`You didn't enter any information.\n Please, provide valid height and weight!`)
    } else if (heightValue === "" || isNaN(heightValue)) {
        result.innerText = "Please, provide a height"
    }
    else if (weightValue === "" || isNaN(weightValue)) {
        result.innerText = "Please, provide a weight"
    } else {
        let heightMeters = heightValue/100
        let bmi = (weightValue/Math.pow(heightMeters, 2)).toFixed(2)
        calculate.style.display = 'none';
        reset.style.display = 'block';

        if (bmi <= 18.5){
            showResult (`Underweight: <span>${bmi}</span>`, "#55bbdd8d")
        }
        if (bmi >= 18.5 && bmi <= 25){
            showResult (`Normal: <span>${bmi}</span>`, " #85b18496")
        }
        if (bmi >= 25 && bmi <= 30){
            showResult (`Overweight: <span>${bmi}</span>`, "#f5c0397e")
        }
        if (bmi >= 30){    
            showResult (`Obese: <span>${bmi}</span>`, "#c97262aa")
        }
    }
    result.style.display = 'block';
}
function showResult (value, color ) {
    result.style.backgroundColor = color
    return result.innerHTML = value
}
function resetForm() {
   location.reload();

//  // Reset input values
//  height.value = '';
//  weight.value = '';
//  // Reset the result
//  result.style.display = 'none';
//  result.innerHTML = '';

calculate.style.display = 'block';
reset.style.display = 'none';
}
