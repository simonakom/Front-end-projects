const people = [];
let currentNumeration= 1;

const buttonElement = document.querySelector ("#add-button");
const formElement = document.querySelector("#form"); 
const result = document.querySelector (".result");


buttonElement.addEventListener("click", ()=>{
    const person = {};
    person.firstName = document.getElementById(`firstNameInput`).value;
    person.lastName = document.getElementById(`lastNameInput`).value;
    person.age = document.getElementById(`ageInput`).value;
    person.nationality = document.getElementById(`nationalityInput`).value;
    person.number = currentNumeration;
    currentNumeration++;
    console.log (person);

    if (!person.firstName || !person.lastName || !person.age || !person.nationality) {
        result.innerText = (`Something is missing....\n Please, fill in the complete form!`)
        result.style.display = 'block';
        return;
    }else {
        result.style.display = 'none';
    }

    if (!/^[A-Za-z\s]+$/.test(person.firstName) || !/^\d+$/.test(person.age) || !/^[A-Za-z\s]+$/.test(person.nationality)) {
        result.innerText = (`Invalid input.\n Please use only letters for names/nationality, and numbers for age.`);
        result.style.display = 'block';
        return;
    }


    people.push(person);
    generateTableContent (people);

    formElement.reset();
}); 

function generateTableContent (people){
    let dynamicHTML = ``; 
    for(let person of people){
        dynamicHTML += 
        `<tr>
        <td>${person.number}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.age}</td>
        <td>${person.nationality}</td>   
        </tr>`;
    }

    const tbody =document.querySelector(`table tbody`)
    tbody.innerHTML = dynamicHTML;
}